import Head  from "next/head";
import Header from "./Header";

export default function Layout({children}) {
  return (
    <div className="relative w-screen h-screen">
      <Head>
        <title>Resto</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>
      <main className="pt-20 relative z-40">
        {children}
      </main>
    </div>
  )
}
