import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin', 'cyrillic'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        {children}
      </body>
    </html>
  )
}
