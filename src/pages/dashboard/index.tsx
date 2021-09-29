import { Layout } from 'components';
import type { NextPage } from 'next';
import Head from 'next/head';
import {} from 'pages/dashboard/'

const Dashboard: NextPage = () => {
    return (
        <div>
            <Head>
                <title>techEats</title>
                <link rel="icon" href="/favicon.ico" />
            </Head> 
            
            <Layout />

        </div>
    )
}

export default Dashboard;