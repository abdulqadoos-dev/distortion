import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { GlobalStateProvider } from '../context/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalStateProvider>
      <Component {...pageProps} />
    </GlobalStateProvider>
  )
}

export default MyApp
