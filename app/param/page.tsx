"use client";

import { useSearchParams } from "next/navigation";

// path variable + query string 같이 밭기
// /param/1?page=2

// 한 폴더안에 동적 폴더가 여러개면 error
// 한 폴더안에 page.tsx가 여러개면 error

export default function Param2() {
  //query string => searchParams()
  const searchParam = useSearchParams(); // Param의 값을 가져오는 HOOK
  const page = searchParam.get("page") ?? 1;
  const no = searchParam.get("no") ?? "1";
  const name = searchParam.get("name") ?? "선택안함"; // 현재 안보낸 param

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      현재 페이지 : {page} / {no}, 선택학생 : {name}
    </div>
  );
}
