import './globals.css'
import { Inter } from 'next/font/google'
import MainNavbar from './components/navbar/Navbar'
import Useronboarding from './components/onboarding/Useronboarding'
const inter = Inter({ subsets: ['latin'] })
import getCurrentUser from '@/app/actions/getCurrentUser';
import { SafeUser } from './types'
export const metadata = {
  title: 'Project Aurora',
  description: '',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();
  return (
    <html lang="en">
      <body className="min-h-screen">
        <MainNavbar currentUser={currentUser} />
        {children}
      </body>
    </html>
  )
}
