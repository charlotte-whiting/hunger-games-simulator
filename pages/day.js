import Link from "next/link";
import { allTributes } from "./reaping";
import Layout from "../components/layout";
import { AllDead, Randomize } from "./bloodbath";

export default function Day() {
  console.log(allTributes);
  return (
    <Layout>
      {allTributes.map((person) => {
        console.log(AllDead());
        if (person.used || !person.alive) {
          return;
        } else {
          return Randomize(person);
        }
      })}
      <Link href="/night">Night falls...</Link>
    </Layout>
  );
}
