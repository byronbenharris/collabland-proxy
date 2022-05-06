import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import WalletContextProvider from '../components/WalletContextProvider.js'

function MyApp({ Component, pageProps }) {
  return (
    <WalletContextProvider>
      <Component {...pageProps} />
    </WalletContextProvider>
  )
}

export default MyApp