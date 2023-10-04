import Link from "next/link";
import { AllDead, Randomize } from "../bloodbath/page";
import { allTributes } from "../reaping/page";

export default function Day() {
  console.log(allTributes);
  return (
    <>
      {allTributes.map((person) => {
        console.log(AllDead());
        if (person.used || !person.alive) {
          return;
        } else {
          return Randomize(person);
        }
      })}
      <Link href="/night">Night falls...</Link>
    </>
  );
}
