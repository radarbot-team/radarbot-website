import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className=" flex items-center justify-between p-4 border-solid border-b-[1px] border-[#10afba]">
      <Image
        src="/images/icons/radarlogo.svg"
        width={47}
        height={47}
        alt="radar logo" />

      <div className="  flex gap-4 text-white">
        <Link href="">home</Link>
        <Link href="">Features</Link>
        {/* <Link href="">Analytics</Link>
        <Link href="">Testimonials</Link>
        <Link href="">Support</Link>
        <Link href="">Docs</Link> */}
      </div>

{/* 
      <Link href="" className= "  bg-main-blue hover:bg-main-blue-hover px-8 p-2 rounded-xl font-bold text-white text-xl shadow ">Login</Link>
 */}
    </div>
  )
}