import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import links from '../links'
const Navbar = () => {
  const router = useRouter()
  return (
    <header className="flex w-full justify-between bg-gray-800 p-1 text-sm">
      <div className="flex items-center p-5">
        <Image
          src={'/logo.jpg'}
          width={60}
          height={60}
          className="rounded-full"
        />
        <h1 className="hidden cursor-pointer p-3 text-2xl font-bold text-white transition duration-150 hover:translate-y-[-0.25rem] hover:text-teal-500 md:inline-flex">
          <Link href="/">Tabbies</Link>
        </h1>
      </div>

      <div className="flex items-center p-5">
        <div className="hidden space-x-7 md:inline-flex">
          <h1
            className="cursor-pointer text-xl font-semibold text-white transition duration-150 hover:translate-y-[-0.25rem] hover:text-teal-500"
            onClick={() => router.push('/#mint')}
          >
            Mint NFT
          </h1>
          <h1
            className="cursor-pointer text-xl font-semibold text-white transition duration-150 hover:translate-y-[-0.25rem] hover:text-teal-500"
            onClick={() => router.push('/#about')}
          >
            About Us
          </h1>
          <h1
            className="cursor-pointer text-xl font-semibold text-white transition duration-150 hover:translate-y-[-0.25rem] hover:text-teal-500"
            onClick={() => router.push('/#launch')}
          >
            Launch Date
          </h1>
        </div>
      </div>

      <div className="flex items-center p-5">
        <div className="inline-flex md:hidden">
          <div className="dropdown-end dropdown">
            <div tabIndex="0" className="btn m-1">
              Dropdown
            </div>
            <ul
              tabIndex="0"
              className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
            >
              <li>
                <a
                  className="font-bold transition duration-150 hover:text-[#7289da]"
                  onClick={() => router.push(links.discordServer)}
                >
                  Discord Server
                </a>
              </li>
              <li>
                <a
                  className="font-bold transition duration-150 hover:text-[#1DA1F2]"
                  onClick={() => router.push(links.twitterAccount)}
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="font-bold transition duration-150 hover:text-[#c32aa3]"
                  onClick={() => router.push(links.instagramAccount)}
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hidden space-x-7 md:inline-flex">
          <i
            className="fab fa-discord cursor-pointer text-3xl text-white transition duration-150 hover:translate-y-[-0.25rem] hover:text-[#7289da]"
            onClick={() => router.push(links.discordServer)}
          />
          <i
            className="fab fa-twitter cursor-pointer text-3xl text-white transition duration-150 hover:translate-y-[-0.25rem] hover:text-[#1DA1F2]"
            onClick={() => router.push(links.twitterAccount)}
          />
          <i
            className="fab fa-instagram cursor-pointer text-3xl text-white transition duration-150 hover:translate-y-[-0.25rem] hover:text-[#c32aa3]"
            onClick={() => router.push(links.instagramAccount)}
          />
        </div>
      </div>
    </header>
  )
}

export default Navbar
