import Head from "next/head";
import Header from "@/components/Header";
import About from "@/components/About";
import Cars from "@/components/Cars";
import History from "@/components/History";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export default function Home() {

  return (
    <>
      <Head>
        <title>BMW M Cars to sell</title>
        <meta name="description" content="Purchase your car" />
      </Head>
      <main>
        <div className="back">
          <Header/>
          <About />
          <Cars />
          <History />
          <Contact />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}
