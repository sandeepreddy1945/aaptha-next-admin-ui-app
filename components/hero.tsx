import Image from "next/image";
import NextLogo from "./next-logo";
import SupabaseLogo from "./supabase-logo";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="flex gap-8 justify-center items-center">
        <Image
          src="/images/aaptha.png"
          alt="Aaptha Elder Care Logo"
          width={500}
          height={300}
          className="opacity-70 hover:opacity-100 transition-opacity"
        />
      </div>
      <h1 className="sr-only">Welcome To Aaptha Elder Care Admin Dashboard</h1>
      <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        Welcome To{" "}
        <a
          href="https://aaptha-main-website-app.vercel.app/"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Aaptha Elder Care
        </a>{" "}
        Admin Dashboard{" "}
      </p>
      <p className="text-xl !leading-tight mx-auto max-w-xl text-center">
        Click on the{" "}
        <Link href="/sign-in" className="font-bold hover:underline">
          {" "}
          Sign In
        </Link>{" "}
        Button To Continue !
      </p>
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
