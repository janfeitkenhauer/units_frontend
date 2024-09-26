import './globals.css'

import Search from '@/components/search';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className='sticky top-0 w-full flex flex-col px-6 backdrop-blur-md shadow-sm flex items-center justify-center'>
      <h1 className='text-xl font-semibold mt-4'>Semantic Unit Library</h1>
      <Search />
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