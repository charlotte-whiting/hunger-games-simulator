import Link from "next/link";
import { allTributes } from "../reaping/page";
import {
  single_person_dies_phrases,
  single_person_survives_phrases,
} from "../phrases/single_person_phrases";
import Head from "next/head";

// have a day night export that you switch between

export default function Bloodbath() {
  console.log(allTributes);
  return (
    <>
      <Head>Bloodbath</Head>
      {allTributes.map((person) => {
        if (person.used || !person.alive) {
          return;
        } else {
          return Randomize(person);
        }
      })}
      <Link href="/day">Day</Link>
      <br />
      <Link href="/reaping">Back to Reaping</Link>
    </>
  );
}
// @ts-ignore
export function Randomize(person) {
  //   const numPeople = Math.random() * 4 + 1;
  // just one person for now
  const numPeople = 1;
  if (numPeople === 1) {
    return SinglePerson(person);
  }
}

export function AllDead() {
  for (const person in allTributes) {
    if (allTributes[person].alive) {
      return false;
    }
  }
  return true;
}

// @ts-ignore
export function SinglePerson(person) {
  const liveOrDie = Math.random() * 10 + 1;
  if (liveOrDie <= 5) {
    // die
    person.alive = false;
    const phrase =
      single_person_dies_phrases[
        Math.floor(Math.random() * single_person_dies_phrases.length)
      ];
    return (
      <div>
        <div>
          {person.name} {phrase}.
        </div>
      </div>
    );
  } else {
    const phrase =
      single_person_survives_phrases[
        Math.floor(Math.random() * single_person_survives_phrases.length)
      ];
    return (
      <div>
        <div>
          {person.name} {phrase}.
        </div>
      </div>
    );
  }
}
