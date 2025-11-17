"use client";
import React, { useState } from "react";

export default function Comp2() {
  // count + - => 0~10
  const [number, setNumber] = useState<number>(0);
  const onIncrease = () => {
    if (number >= 10) setNumber(10);
    else {
      // setNumber(number + 1);
      // 함수형 업데이트 : 컴포넌트에 최적화 시킬 때 사용
      setNumber((n) => n + 1);
    }
  };

  const onDecrease = () => {
    if (number <= 0) {
      setNumber(0);
    } else {
      // setNumber(number - 1);
      setNumber((n) => n - 1);
    }
  };
  // input 값 처리 onChange
  const [text, setText] = useState<string>("");
  // input color로 값 처리
  const [bgColor, setBgColor] = useState<string>("");
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-3xl font-bold m-2">Comp2.tsx Page</h1>
      <div>
        <h1 className="text-xl font-bold text-center pb-5">{number}</h1>
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
        <div>{text}</div>
      </div>
      <div>
        <h2 style={{ backgroundColor: bgColor }}>BackgroundColor</h2>
        <input
          type="color"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setBgColor(e.target.value);
            console.log(bgColor);
          }}
        />
      </div>
    </div>
  );
}
