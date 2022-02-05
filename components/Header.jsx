import Head from 'next/head'

const Header = ({ title, description }) => {
  return (
    <Head>
      <title>{title} | Tabbies</title>
      <link rel="icon" type="image/x-icon" href="/logo.jpg" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      {/* OpenGraph */}
      <meta property="og:title" content={`${title} | Tabbies`} />
      <meta property="og:url" content="http://www.tabbiesnft.tech/" />
      <meta property="og:image" content="/banner.jpg" />
      <meta property="og:description" content={description} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@tabbiesNFT" />
      <meta name="twitter:title" content={`${title} | Tabbies`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:creator" content="@tabbiesNFT" />
      <meta name="twitter:image" content="/banner.jpg" />
    </Head>
  )
}

Header.defaultProps = {
  title: '',
  description:
    "Tabbies is an NFT collection curated for the community and the blockchain. It's a collection of over 3,000 NFTS on the polygon blockchain. We're building a community-driven NFT collection, come join us now!",
}

export default Header
