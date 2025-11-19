"use client";
import { useParams } from "next/navigation";

export default function Param() {
  // useParams()
  const params = useParams(); // params는 변수가 아님 => 객체

  // 한글깨짐현상 방지
  const id = decodeURIComponent(params.id as string | "");

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      params : {id}
    </div>
  );
}
