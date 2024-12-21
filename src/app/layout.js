import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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
        <main>{children}</main>
        <footer>© 2024 Donna Vino</footer>
      </body>
    </html>
  );
}
