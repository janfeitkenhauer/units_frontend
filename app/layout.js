import './globals.css'

import Search from '@/components/search';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className='sticky top-0 w-full h-16 flex flex-col px-6 backdrop-blur-md shadow-sm'>
      <nav className='w-full flex flex-1 items-center justify-center gap-24'>
          <a href="/">Home</a>
      </nav>
      {/* <Search /> */}
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2024 Brightcon</p>
    </footer>
  );
}