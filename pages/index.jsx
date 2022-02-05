import Head from 'next/head'
import Header from '../components/Header'
import MainPage from '../components/MainPage'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header title={'Home'} />
      {/* Navbar */}
      <Navbar />
      {/* Main Page */}
      <MainPage />
      {/* Footer */}
    </div>
  )
}
