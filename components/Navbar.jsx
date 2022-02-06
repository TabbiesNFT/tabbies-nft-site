import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import links from '../links'
const Navbar = () => {
  const router = useRouter()
  return (
    <header className="sticky flex w-full justify-between bg-gray-800 p-1 text-sm">
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
        {/* Seperator */}
        <div className="inline-flex md:hidden">
          {/* Seperator */}
          <div className="dropdown-end dropdown">
            <div tabIndex="0" className="btn m-1">
              Navigation
            </div>
            <ul
              tabIndex="0"
              className="dropdown-content menu rounded-box w-52 bg-base-100 p-2 shadow"
            >
              <li>
                <a
                  className="font-bold text-white transition duration-150 hover:text-teal-500"
                  onClick={() => router.push('/#mint')}
                >
                  <i className="fas fa-cat pr-2" />
                  Mint NFT
                </a>
              </li>
              <li>
                <a
                  className="font-bold text-white transition duration-150 hover:text-teal-500"
                  onClick={() => router.push('/#about')}
                >
                  <i className="fas fa-book pr-2" />
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="font-bold text-white transition duration-150 hover:text-teal-500"
                  onClick={() => router.push('/#launch')}
                >
                  <i className="fas fa-rocket pr-2" />
                  Launchs
                </a>
              </li>
              <br />
              <hr className="items-center" />
              <br />
              <li>
                <a
                  className="font-bold transition duration-150 hover:text-[#7289da]"
                  onClick={() => router.push(links.discordServer)}
                >
                  <i className="fab fa-discord pr-2" />
                  Discord Server
                </a>
              </li>
              <li>
                <a
                  className="font-bold transition duration-150 hover:text-[#1DA1F2]"
                  onClick={() => router.push(links.twitterAccount)}
                >
                  <i className="fab fa-twitter pr-2" />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="font-bold transition duration-150 hover:text-[#bd44a2]"
                  onClick={() => router.push(links.instagramAccount)}
                >
                  <i className="fab fa-instagram pr-2" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          {/* Seperator */}
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
            className="fab fa-instagram cursor-pointer text-3xl text-white transition duration-150 hover:translate-y-[-0.25rem] hover:text-[#bd44a2]"
            onClick={() => router.push(links.instagramAccount)}
          />
        </div>
        {/* Seperator */}
      </div>
    </header>
  )
}

export default Navbar
