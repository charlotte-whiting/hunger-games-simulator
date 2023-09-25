import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";
import { MaleTributes } from "../reaping";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <div>{MaleTributes[1].name}</div>
    </Layout>
  );
}
