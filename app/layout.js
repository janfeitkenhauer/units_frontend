import './globals.css'

import Search from '@/components/search';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Search />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}

function Header() {
  return (
    <header className='sticky top-0 w-full h-16 flex flex-col px-6 backdrop-blur-md shadow-sm flex items-center justify-center'>
      <h1 className='text-xl font-semibold'>Semantic Unit Library</h1>
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