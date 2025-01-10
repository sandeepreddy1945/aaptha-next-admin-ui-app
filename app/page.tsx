import DeployButton from "@/components/deploy-button";
import { EnvVarWarning } from "@/components/env-var-warning";
import HeaderAuth from "@/components/header-auth";
import Hero from "@/components/hero";
import { ThemeSwitcher } from "@/components/theme-switcher";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";
import Link from "next/link";

export default async function Home() {
  return (
    <>
      <main className="min-h-screen flex flex-col items-center">
        <div className="flex-1 w-full flex flex-col gap-20 items-center">
          <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
            <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
              <div className="flex gap-5 items-center font-semibold">
                <Link href={"/"}>Aaptha Elder Care</Link>
              </div>
              {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
            </div>
          </nav>

          <div className="flex flex-col gap-12 items-center">
            <Hero />
          </div>
          <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-16">
            <p>
              Powered by{" "}
              <a
                href="https://aaptha-main-website-app.vercel.app/"
                target="_blank"
                className="font-bold hover:underline"
                rel="noreferrer"
              >
                Aaptha Elder Care Services
              </a>
            </p>
            <ThemeSwitcher />
          </footer>
        </div>
      </main>
    </>
  );
}
