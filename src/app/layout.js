import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen w-full">
        {/* Header */}
        <header>
          <nav>
            <ul className="flex bg-red-400 justify-center space-x-6 list-none">
              <li>
                <a href="/" className="text-lg">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-lg">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-lg">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* Main content, will adjust its size based on the content */}
        <main className=" flex-grow">{children}</main>

        {/* Footer, will always stay at the bottom */}
        <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
          © 2024 Donna Vino
        </footer>
      </body>
    </html>
  );
}
