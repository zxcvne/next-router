"use client";
import { useSearchParams } from "next/navigation";

export default function Param3() {
  //query string => searchParams()
  const searchParam = useSearchParams(); // Param의 값을 가져오는 HOOK
  const id = searchParam.get("id") ?? "없음";
  const nick = searchParam.get("nick") ?? "없음";

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      이름 : {id} / 닉네임 : {nick}
    </div>
  );
}
