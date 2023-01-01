import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { FullContextProvider } from '../context/Context'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FullContextProvider>
      <Component {...pageProps}></Component>
    </FullContextProvider>
  )
}
