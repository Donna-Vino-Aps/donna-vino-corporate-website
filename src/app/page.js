export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1>Welcome to the official Donna Vino</h1>
        <p>
          This project is dedicated to developing the website for our innovative
          eCommerce platform, where premium wine sales meet curated tasting
          experiences.
        </p>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </footer>
    </div>
  );
}
