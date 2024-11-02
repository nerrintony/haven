"use client";
import Verifyemail from "@/Component/Verifyemail/Verifyemail";

export default function Home({params}) {
  return (
    <>
<Verifyemail token={params.token} />
    </>
  );
}