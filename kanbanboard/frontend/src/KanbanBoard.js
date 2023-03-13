import React from "react";
import styles from "./assets/css/KanbanBoard.css";
import data from "./assets/json/data.json";
import CardList from "./CardList";

const KanbanBoard = () => {
  const [cards, setCards] = useState(data);

  const TaskList = ({ tasks }) => {
    const changeTaskStatus = function (cardNo, taskNo, done) {
      const cardIndex = cards.findIndex(cardNo);
      const taskIndex = cards[cardIndex].tasks.findIndex((task) => {task.no === no})
      console.log(index, done);
      cards[cardIndex].tasks[taskIndex].done = done;
  
      setCards(cards);
    };

  return (
    <div className={styles.KanbanBoard}>
      <CardList
        key={"To Do"}
        title={"To Do"}
        cards={cards.filter((card) => card.status === "ToDo")}
        callback={changeTaskStatus}
      />
      <CardList
        key={"Doing"}
        title={"Doing"}
        cards={cards.filter((card) => card.status === "Doing")}
        callback={changeTaskStatus}
      />
      <CardList
        key={"Done"}
        title={"Done"}
        cards={cards.filter((card) => card.status === "Done")}
        callback={changeTaskStatus}
      />
    </div>
  );
};

export default KanbanBoard;
