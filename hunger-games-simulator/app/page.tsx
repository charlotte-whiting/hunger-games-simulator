import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunger Games Simulator</title>
      </Head>
      <h1>Welcome to the Hunger Games Simulator!</h1>
      <h2>Click below to enter names into the Reaping</h2>
      <Link href="/reaping">Reaping Time</Link>
    </>
  );
}
