import Image from 'next/image'
import { useRouter } from 'next/router'
const MainPage = () => {
  const router = useRouter()
  return (
    <div>
      <div className="mt-44 flex flex-col items-center">
        <h1 className="mt-5 flex animate-pulse px-5 py-2 text-7xl font-bold text-teal-500">
          Tabbies
        </h1>
        <div className="sm:space-0 m-3 flex flex-col justify-center space-y-2">
          <h3 className="text-md font-semibold text-gray-400">
            Tabbies is an NFT collection curated around the community and built
            by the community.
          </h3>
        </div>
        <div
          id="mint"
          className="mt-3 flex flex-col justify-center space-y-2 sm:space-y-0"
        >
          {/* Seperator */}
          <label
            htmlFor="mint-unavailable"
            className="modal-button btn-outline btn btn-accent btn-md w-[10rem]"
          >
            <i className="fas fa-cat pr-2" />
            Mint NFT
          </label>
          {/* Seperator */}
          <input
            type="checkbox"
            id="mint-unavailable"
            className="modal-toggle"
          />
          <div className="modal">
            <div className="modal-box">
              <p>Minting is currently unavailable. Please check back later.</p>
              <div className="modal-action">
                <label htmlFor="mint-unavailable" className="btn btn-accent">
                  Close
                </label>
              </div>
            </div>
          </div>
          {/* Seperator */}
        </div>
      </div>
    </div>
  )
}

export default MainPage
