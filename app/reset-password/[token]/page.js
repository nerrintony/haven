"use client";
import ResetPass from "@/Component/ResetPass/ResetPass";

export default function Home({params}) {
  return (
    <>
      <ResetPass token={params.token} />
    </>
  );
}
