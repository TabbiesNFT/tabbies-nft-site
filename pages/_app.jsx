import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        integrity={process.env.NEXT_FONTAWESOME_INTEGRITY}
        crossOrigin="anonymous"
      />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
