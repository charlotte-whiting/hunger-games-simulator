import Link from "next/link";
import { allTributes } from "./reaping";
import Layout from "../components/layout";
import { Randomize } from "./bloodbath";

export default function Night() {
  console.log(allTributes);
  return (
    <Layout>
      {allTributes.map((person) => {
        if (person.used || !person.alive) {
          return;
        } else {
          return Randomize(person);
        }
      })}
      <Link href="/day">Next Day</Link>
    </Layout>
  );
}
