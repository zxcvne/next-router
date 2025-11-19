"use client";
import React, { useState } from "react";

export default function Comp2() {
  // count + - => 0~10
  const [count, setCount] = useState<number>(0);
  const onIncrease = () => {
    setCount((num) => (num < 10 ? num + 1 : num));

    // if (count >= 10) setCount(10);
    // else {
    //   // setcount(count + 1);
    //   // 함수형 업데이트 : 컴포넌트에 최적화 시킬 때 사용
    //   setCount((n) => n + 1);
    // }
  };

  const onDecrease = () => {
    setCount((num) => (num > 0 ? num - 1 : num));

    // if (count <= 0) {
    //   setCount(0);
    // } else {
    //   // setcount(count - 1);
    //   setCount((n) => n - 1);
    // }
  };
  // input 값 처리 onChange
  const [text, setText] = useState<string>("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  // input color로 값 처리
  const [bgColor, setBgColor] = useState<string>("");
  const style = {
    color: "black",
    backgroundColor: bgColor,
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-3xl font-bold m-5">Comp2.tsx Page</h1>
      <div>
        <h1 className="text-xl font-bold text-center pb-5">{count}</h1>
        <button
          className="bg-green-500 text-white mr-3 px-4 py-2 rounded"
          onClick={onIncrease}
        >
          +
        </button>
        <button
          className="bg-green-500 text-white mr-3 px-4 py-2 rounded"
          onClick={onDecrease}
        >
          -
        </button>
      </div>
      <br />
      <div>
        <input
          className="p-2 font-bold bg-blue-100"
          type="text"
          name="text"
          value={text}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setText(e.target.value);
          }}
        />
        <br />
        <div>input 글자 출력 : {text}</div>
      </div>
      <div>
        <h2 style={style}>BackgroundColor</h2>
        <input
          type="color"
          onChange={(e) => {
            setBgColor(e.target.value);
          }}
        />
      </div>
    </div>
  );
}
