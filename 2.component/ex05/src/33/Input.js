import React, { useState } from "react";

const Input = () => {
    const [inputs, setInputs] = useState({
        name: "",
        nickname: "",
    });

    const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

    const onReset = () => {
        setInputs({
            name: "",
            nickname: "",
        });
    };
    const ch = (e) =>  {setInputs(e.target.name.value)};
    

    return (
        <div>
            <input
                name="name"
                placeholder="이름"
                onChange={ch}
                value={name}
            />
            <input
                name="nickname"
                placeholder="닉네임"
                onChange={(e) => {setInputs(e.target.nickname.value)}}
                value={nickname}
            />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>
                {name} ({nickname})
            </div>
        </div>
    );
};

export default Input;
