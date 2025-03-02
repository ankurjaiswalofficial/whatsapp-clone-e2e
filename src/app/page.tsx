import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png"
          alt="Whatsapp Logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] max-w-sm">
          <li className="bg-sky-500 w-fit rounded px-1 font-bold">Currently in Development</li>
          <li>This is a robust Whatsapp application clone having almost all of the features what real Whatsapp has.</li>
          <li className="mb-2">
            Want access to the repository please contact me at&nbsp;
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              <Link target="_blank" href={"https://mail.google.com/mail/?view=cm&fs=1&to=&su=Request%20for%20Codebase%20Access%20-%20(Whatsapp)&body=Hi%2C%0A%0AI%20am%20an%20interviewer%20or%20recruiter%2C%20and%20I%20want%20to%20see%20your%20code%20base%20and%20development%20work.%20Could%20you%20please%20grant%20me%20access%3F%0A%0ARegards%2C%0A%5BYour%20Name%5D%0A%0AThank%20you."}>ankurjaiswalofficial@gmail.com</Link>
            </code>
            .
          </li>
          <li className="bg-red-500 w-fit rounded px-1">Deployment URL will be available soon...</li>
          <li>The real repository is hidden to avoid any piracy and duplication of codebase.</li>
        </ol>

        <div className="flex gap-4 items-start flex-col">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 font-bold"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=&su=Request%20for%20Codebase%20Access%20-%20(Whatsapp)&body=Hi%2C%0A%0AI%20am%20an%20interviewer%20or%20recruiter%2C%20and%20I%20want%20to%20see%20your%20code%20base%20and%20development%20work.%20Could%20you%20please%20grant%20me%20access%3F%0A%0ARegards%2C%0A%5BYour%20Name%5D%0A%0AThank%20you."
            target="_blank"
            rel="noopener noreferrer"
          >
            Request Code Access
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 font-bold"
            href={"#"}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read terms and conditions
          </a>
        </div>
      </main>
    </div>
  );
}
