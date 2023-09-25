import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Hunger Games Simulator</title>
      </Head>
      <h1>Welcome to the Hunger Games Simulator!</h1>
      <h2>Click below to enter names into the Reaping</h2>
      <Link href="/reaping">Reaping Time</Link>
    </Layout>
  );
}
