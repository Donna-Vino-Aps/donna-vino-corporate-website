export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© 2024 Donna Vino</footer>
      </body>
    </html>
  );
}
