import '@/styles/globals.css'
import { SanityProvider } from "../contexts/SanityContext";

export default function App({ Component, pageProps }) {
  return (
  
  <SanityProvider>
    <Component {...pageProps}/>
  </SanityProvider>
  
  )
}
