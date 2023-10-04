import Link from "next/link";
import { allTributes } from "../reaping/page";
import { Randomize } from "../bloodbath/page";

export default function Night() {
  console.log(allTributes);
  return (
    <>
      {allTributes.map((person) => {
        if (person.used || !person.alive) {
          return;
        } else {
          return Randomize(person);
        }
      })}
      <Link href="/day">Next Day</Link>
    </>
  );
}
