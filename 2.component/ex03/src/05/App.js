import React, { useRef } from "react";
import "../assets/scss/App.scss";

export default function App() {
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  return (
    <div
      className={"App"}
      ref={outerRef}
      onScroll={(e) => {
        console.log(
          outerRef.current.clientHeight,
          innerRef.current.clientHeight,
          outerRef.current.scrollTop
        );
      }}
    >
      <div ref={innerRef}>
        <ul>
          {Array.from({ length: 100 }, (_, i) => i + 1).map((i) => (
            <li>{`아이템 ${i} 입니다.`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
