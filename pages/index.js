import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="351 design" />
         <img src="/351logo_square.png" width="200" height="200" alt="351 design logo"/>
        <p className="description">
          351 design is a digital and print publishing company.
        </p>
        <p className="description">
          We create adventure travel guidebooks, maps, and digital assets  that help people explore destination cities in an active way.
        </p>
        

      </main>

      <Footer />
    </div>
  )
}
