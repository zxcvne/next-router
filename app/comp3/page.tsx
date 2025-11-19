"use client";
import Link from "next/link";
import { students } from "../data/data";
import Student from "../components/Student";
import React, { useState } from "react";

export default function Comp3() {
  // 다른 컴포넌트로 이동 / 데이터를 전달하는 작업
  // 데이터를 전달하는 방법 2가지
  // 1. Path Variable => /comp1/1
  // 2. Query String => /comp1?id&page=3

  // Path Variable => params 객체로 접근 ([id] 동적폴더 사용)
  // Query String => searchParams 객체로 접근 (?key=value&key=value) //띄어쓰기X, .X

  // const id = 10; // 가능
  // const id = "abcd"; // 가능
  // const id = "홍길동"; // params로 값을 보내면 한글 깨짐
  const name = "홍길동";

  const [inputs, setInputs] = useState({
    id: "",
    nick: "",
  });
  const { id, nick } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-3xl font-bold m-5">Comp3.tsx Page</h1>
      <div className="flex flex-col items-center gap-3">
        {/* path variable 방법으로 Param.tsx에 값을 전달 */}
        <Link href={`/param/${name}`}>path variable로 데이터 전달</Link>
        {/* query string 방법으로 Param2.tsx에 값을 전달 */}
        <Link href={`/param?page=2&no=10&name=${name}`}>
          query string 여러개의 데이터 전달
        </Link>
      </div>
      <div className="flex flex-col items-center gap-3 mt-5">
        {/* student 데이터를 가져와서 출력 */}
        {students.map((s, i) => (
          <Link href={`/param/${s.name}`}>
            <Student std={s} />
          </Link>
        ))}
        {/* students 데이터를 클릭하면 param.tsx로 학생의 이름을 전달*/}
      </div>
      <div className="flex flex-col items-center gap-3">
        {/* input id, nick /param2?id=&nick */}
        <input
          className="border border-gray-300 p-2"
          type="text"
          name="id"
          value={id}
          onChange={onChange}
          placeholder="id..."
        />
        <input
          className="border border-gray-300 p-2"
          type="text"
          name="nick"
          value={nick}
          onChange={onChange}
          placeholder="nick..."
        />
        <Link href={`/param2?id=${id}&nick=${nick}`}>
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            전송
          </button>
        </Link>
      </div>
    </div>
  );
}
