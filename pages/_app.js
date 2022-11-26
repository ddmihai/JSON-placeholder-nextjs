import '../styles/globals.css'
import Layout from '../components/Layouts/Layout'
import Header from '../components/header/header'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout> 
  )
}

export default MyApp
