"use client";
import Head from "next/head";
import Link from "next/link";

export interface tribute {
  name: string;
  infected: boolean;
  alive: boolean;
  hasExplosive: boolean;
  hasMelee: boolean;
  exists: boolean;
  kills: number;
  used: boolean;
}

export var allTributes = [
  {
    name: "katie",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  {
    name: "charlotte",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  {
    name: "olivia",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  {
    name: "your mom",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  {
    name: "ashley",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  {
    name: "natalie",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  {
    name: "justin",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  {
    name: "allen",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  {
    name: "daniel",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  {
    name: "sean",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },

  {
    name: "bob",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },

  {
    name: "mike",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  {
    name: "carl",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  {
    name: "harry potter",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  {
    name: "cookie",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  {
    name: "candy",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  {
    name: "pumpkin",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  {
    name: "voldemort",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  {
    name: "edward cullen",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  {
    name: "katniss",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  {
    name: "peeta",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  {
    name: "percy jackson",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },

  {
    name: "iron man",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },

  {
    name: "batman",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
];
// possibly store various states in each object
// ie weapons that they have
// maybe change all css to global so that we can get rid of layout

export default function Reaping() {
  return (
    <>
      <Head>
        <title>Reaping</title>
      </Head>
      <h1>Welcome to the Reaping</h1>

      {/* 1,2,3,4 */}
      <div className="flex flex-row items-center">
        <div className="my-2 mx-5">
          <h2>District 1</h2>
          <div>Male</div>
          <input
            type="text"
            id="Dist1M"
            defaultValue=""
            onChange={(event) => {
              allTributes[0].name = event.target.value;
              allTributes[0].exists = true;
            }}
          ></input>
          <br />
          {/* import images later on */}
          <div>Female</div>
          <input
            type="text"
            id="Dist1F"
            defaultValue=""
            onChange={(event) => {
              allTributes[1].name = event.target.value;
              allTributes[1].exists = true;
            }}
          ></input>
        </div>
        <div className="my-2 mx-5">
          <h2>District 2</h2>
          <div>Male</div>
          <input
            type="text"
            id="Dist2M"
            defaultValue=""
            onChange={(event) => {
              allTributes[2].name = event.target.value;
              allTributes[2].exists = true;
            }}
          ></input>
          <br />
          {/* import images later on */}
          <div>Female</div>
          <input
            type="text"
            id="Dist2F"
            defaultValue=""
            onChange={(event) => {
              allTributes[3].name = event.target.value;
              allTributes[3].exists = true;
            }}
          ></input>
        </div>
        <div className="my-2 mx-5">
          <h2>District 3</h2>
          <div>Male</div>
          <input
            type="text"
            id="Dist3M"
            defaultValue=""
            onChange={(event) => {
              allTributes[4].name = event.target.value;
              allTributes[4].exists = true;
            }}
          ></input>
          <br />
          {/* import images later on */}
          <div>Female</div>
          <input
            type="text"
            id="Dist3F"
            defaultValue=""
            onChange={(event) => {
              allTributes[5].name = event.target.value;
              allTributes[5].exists = true;
            }}
          ></input>
        </div>
        <div className="my-2 mx-5">
          <h2>District 4</h2>
          <div>Male</div>
          <input
            type="text"
            id="Dist4M"
            defaultValue=""
            onChange={(event) => {
              allTributes[6].name = event.target.value;
              allTributes[6].exists = true;
            }}
          ></input>
          <br />
          {/* import images later on */}
          <div>Female</div>
          <input
            type="text"
            id="Dist4F"
            defaultValue=""
            onChange={(event) => {
              allTributes[7].name = event.target.value;
              allTributes[7].exists = true;
            }}
          ></input>
        </div>
      </div>

      {/* 5,6,7,8 */}
      <div className="flex flex-row items-center">
        <div className="my-2 mx-5">
          <h2>District 5</h2>
          <div>Male</div>
          <input
            type="text"
            id="Dist5M"
            defaultValue=""
            onChange={(event) => {
              allTributes[8].name = event.target.value;
              allTributes[8].exists = true;
            }}
          ></input>
          <br />
          {/* import images later on */}
          <div>Female</div>
          <input
            type="text"
            id="Dist5F"
            defaultValue=""
            onChange={(event) => {
              allTributes[9].name = event.target.value;
              allTributes[9].exists = true;
            }}
          ></input>
        </div>
        <div className="my-2 mx-5">
          <h2>District 6</h2>
          <div>Male</div>
          <input
            type="text"
            id="Dist6M"
            defaultValue=""
            onChange={(event) => {
              allTributes[10].name = event.target.value;
              allTributes[10].exists = true;
            }}
          ></input>
          <br />
          {/* import images later on */}
          <div>Female</div>
          <input
            type="text"
            id="Dist6F"
            defaultValue=""
            onChange={(event) => {
              allTributes[11].name = event.target.value;
              allTributes[11].exists = true;
            }}
          ></input>
        </div>
        <div className="my-2 mx-5">
          <h2>District 7</h2>
          <div>Male</div>
          <input
            type="text"
            id="Dist7M"
            defaultValue=""
            onChange={(event) => {
              allTributes[12].name = event.target.value;
              allTributes[12].exists = true;
            }}
          ></input>
          <br />
          {/* import images later on */}
          <div>Female</div>
          <input
            type="text"
            id="Dist7F"
            defaultValue=""
            onChange={(event) => {
              allTributes[13].name = event.target.value;
              allTributes[13].exists = true;
            }}
          ></input>
        </div>
        <div className="my-2 mx-5">
          <h2>District 8</h2>
          <div>Male</div>
          <input
            type="text"
            id="Dist8M"
            defaultValue=""
            onChange={(event) => {
              allTributes[14].name = event.target.value;
              allTributes[14].exists = true;
            }}
          ></input>
          <br />
          {/* import images later on */}
          <div>Female</div>
          <input
            type="text"
            id="Dist8F"
            defaultValue=""
            onChange={(event) => {
              allTributes[15].name = event.target.value;
              allTributes[15].exists = true;
            }}
          ></input>
        </div>
      </div>

      {/* 9,10,11,12 */}
      <div className="flex flex-row items-center">
        <div className="my-2 mx-5">
          <h2>District 9</h2>
          <div>Male</div>
          <input
            type="text"
            id="Dist9M"
            defaultValue=""
            onChange={(event) => {
              allTributes[16].name = event.target.value;
              allTributes[16].exists = true;
            }}
          ></input>
          <br />
          {/* import images later on */}
          <div>Female</div>
          <input
            type="text"
            id="Dist9F"
            defaultValue=""
            onChange={(event) => {
              allTributes[17].name = event.target.value;
              allTributes[17].exists = true;
            }}
          ></input>
        </div>
        <div className="my-2 mx-5">
          <h2>District 10</h2>
          <div>Male</div>
          <input
            type="text"
            id="Dist10M"
            defaultValue=""
            onChange={(event) => {
              allTributes[18].name = event.target.value;
              allTributes[18].exists = true;
            }}
          ></input>
          <br />
          {/* import images later on */}
          <div>Female</div>
          <input
            type="text"
            id="Dist10F"
            defaultValue=""
            onChange={(event) => {
              allTributes[19].name = event.target.value;
              allTributes[19].exists = true;
            }}
          ></input>
        </div>
        <div className="my-2 mx-5">
          <h2>District 11</h2>
          <div>Male</div>
          <input
            type="text"
            id="Dist11M"
            defaultValue=""
            onChange={(event) => {
              allTributes[20].name = event.target.value;
              allTributes[20].exists = true;
            }}
          ></input>
          <br />
          {/* import images later on */}
          <div>Female</div>
          <input
            type="text"
            id="Dist11F"
            defaultValue=""
            onChange={(event) => {
              allTributes[21].name = event.target.value;
              allTributes[21].exists = true;
            }}
          ></input>
        </div>
        <div className="my-2 mx-5">
          <h2>District 12</h2>
          <div>Male</div>
          <input
            type="text"
            id="Dist12M"
            defaultValue=""
            onChange={(event) => {
              allTributes[22].name = event.target.value;
              allTributes[22].exists = true;
            }}
          ></input>
          <br />
          {/* import images later on */}
          <div>Female</div>
          <input
            type="text"
            id="Dist12F"
            defaultValue=""
            onChange={(event) => {
              allTributes[23].name = event.target.value;
              allTributes[23].exists = true;
            }}
          ></input>
        </div>
      </div>

      <br />
      <Link href="/bloodbath">Start the Games...</Link>
    </>
  );
}

export function resetTributes() {
  allTributes = [
    {
      name: "katie",
      infected: false,
      alive: true,
      hasExplosive: false,
      hasMelee: false,
      exists: true,
      kills: 0,
      used: false,
    },
    {
      name: "charlotte",
      infected: false,
      alive: true,
      hasExplosive: false,
      hasMelee: false,
      exists: true,
      kills: 0,
      used: false,
    },
    {
      name: "olivia",
      infected: false,
      alive: true,
      hasExplosive: false,
      hasMelee: false,
      exists: true,
      kills: 0,
      used: false,
    },
    {
      name: "your mom",
      infected: false,
      alive: true,
      hasExplosive: false,
      hasMelee: false,
      exists: true,
      kills: 0,
      used: false,
    },
    {
      name: "ashley",
      infected: false,
      alive: true,
      hasExplosive: false,
      hasMelee: false,
      exists: true,
      kills: 0,
      used: false,
    },
    {
      name: "natalie",
      infected: false,
      alive: true,
      hasExplosive: false,
      hasMelee: false,
      exists: true,
      kills: 0,
      used: false,
    },
    {
      name: "justin",
      infected: false,
      alive: true,
      hasExplosive: false,
      hasMelee: false,
      exists: true,
      kills: 0,
      used: false,
    },
    {
      name: "allen",
      infected: false,
      alive: true,
      hasExplosive: false,
      hasMelee: false,
      exists: true,
      kills: 0,
      used: false,
    },
    {
      name: "daniel",
      infected: false,
      alive: true,
      hasExplosive: false,
      hasMelee: false,
      exists: true,
      kills: 0,
      used: false,
    },
    {
      name: "sean",
      infected: false,
      alive: true,
      hasExplosive: false,
      hasMelee: false,
      exists: true,
      kills: 0,
      used: false,
    },

    {
      name: "bob",
      infected: false,
      alive: true,
      hasExplosive: false,
      hasMelee: false,
      exists: true,
      kills: 0,
      used: false,
    },

    {
      name: "mike",
      infected: false,
      alive: true,
      hasExplosive: false,
      hasMelee: false,
      exists: true,
      kills: 0,
      used: false,
    },
    {
      name: "carl",
      infected: false,
      alive: true,
      hasExplosive: false,
      hasMelee: false,
      exists: true,
      kills: 0,
      used: false,
    },
    {
      name: "harry potter",
      infected: false,
      alive: true,
      hasExplosive: false,
      hasMelee: false,
      exists: true,
      kills: 0,
      used: false,
    },
    {
      name: "cookie",
      infected: false,
      alive: true,
      hasExplosive: false,
      hasMelee: false,
      exists: true,
      kills: 0,
      used: false,
    },
    {
      name: "candy",
      infected: false,
      alive: true,
      hasExplosive: false,
      hasMelee: false,
      exists: true,
      kills: 0,
      used: false,
    },
    {
      name: "pumpkin",
      infected: false,
      alive: true,
      hasExplosive: false,
      hasMelee: false,
      exists: true,
      kills: 0,
      used: false,
    },
    {
      name: "voldemort",
      infected: false,
      alive: true,
      hasExplosive: false,
      hasMelee: false,
      exists: true,
      kills: 0,
      used: false,
    },
    {
      name: "edward cullen",
      infected: false,
      alive: true,
      hasExplosive: false,
      hasMelee: false,
      exists: true,
      kills: 0,
      used: false,
    },
    {
      name: "katniss",
      infected: false,
      alive: true,
      hasExplosive: false,
      hasMelee: false,
      exists: true,
      kills: 0,
      used: false,
    },
    {
      name: "peeta",
      infected: false,
      alive: true,
      hasExplosive: false,
      hasMelee: false,
      exists: true,
      kills: 0,
      used: false,
    },
    {
      name: "percy jackson",
      infected: false,
      alive: true,
      hasExplosive: false,
      hasMelee: false,
      exists: true,
      kills: 0,
      used: false,
    },

    {
      name: "iron man",
      infected: false,
      alive: true,
      hasExplosive: false,
      hasMelee: false,
      exists: true,
      kills: 0,
      used: false,
    },

    {
      name: "batman",
      infected: false,
      alive: true,
      hasExplosive: false,
      hasMelee: false,
      exists: true,
      kills: 0,
      used: false,
    },
  ];
}
