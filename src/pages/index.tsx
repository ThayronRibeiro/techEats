import type { NextPage } from 'next'
import Head from 'next/head'
import {Layout} from 'components';
import { Preload } from 'components/layout/preload';


const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>techEats</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Preload />

    </div>
  )
}

export default Home;
