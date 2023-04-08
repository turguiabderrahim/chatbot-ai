import type { AppProps } from 'next/app'
import '../public/assets/App.css'

import '@vercel/examples-ui/globals.css'

function App({ Component, pageProps }: AppProps) {

  return (
    <div>
      <Component {...pageProps} />
      </div>
  )
}
export default App
