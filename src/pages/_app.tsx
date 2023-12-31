import type { AppProps } from 'next/app'
import '../sass/globals.css'

 
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}