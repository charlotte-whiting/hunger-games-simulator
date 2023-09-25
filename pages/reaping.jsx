import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";

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

export var MaleTributes = {
  [0]: {
    name: "katie",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  [1]: {
    name: "charlotte",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  [2]: {
    name: "olivia",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  [3]: {
    name: "your mom",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  [4]: {
    name: "ashley",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  [5]: {
    name: "natalie",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  [6]: {
    name: "justin",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  [7]: {
    name: "allen",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  [8]: {
    name: "daniel",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  [9]: {
    name: "sean",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  [10]: {
    name: "bob",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  [11]: {
    name: "mike",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
};
export const FemaleTributes = {
  [0]: {
    name: "",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  [1]: {
    name: "",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  [2]: {
    name: "",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  [3]: {
    name: "",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  [4]: {
    name: "",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  [5]: {
    name: "",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  [6]: {
    name: "",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  [7]: {
    name: "",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  [8]: {
    name: "",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  [9]: {
    name: "",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  [10]: {
    name: "",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
  [11]: {
    name: "",
    infected: false,
    alive: true,
    hasExplosive: false,
    hasMelee: false,
    exists: true,
    kills: 0,
    used: false,
  },
};
// possibly store various states in each object
// ie weapons that they have
// maybe change all css to global so that we can get rid of layout

export default function Reaping() {
  return (
    <Layout>
      <Head>
        <title>Reaping</title>
      </Head>
      <h1>Welcome to the Reaping</h1>

      {/* 1,2,3,4 */}
      <div class="reapingInputRows">
        <div class="reapingInputDistrict">
          <h2>District 1</h2>
          <div>Male</div>
          <input
            type="text"
            id="Dist1M"
            defaultValue=""
            onChange={(event) => {
              // MaleTributes[0].name = event.target.value;
              // MaleTributes[0].exists = true;
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
              // FemaleTributes[0].name = event.target.value;
              // FemaleTributes[0].exists = true;
              allTributes[1].name = event.target.value;
              allTributes[1].exists = true;
            }}
          ></input>
        </div>
        <div class="reapingInputDistrict">
          <h2>District 2</h2>
          <div>Male</div>
          <input
            type="text"
            id="Dist2M"
            defaultValue=""
            onChange={(event) => {
              // MaleTributes[1].name = event.target.value;
              // MaleTributes[1].exists = true;
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
              // FemaleTributes[1].name = event.target.value;
              // FemaleTributes[1].exists = true;
              allTributes[3].name = event.target.value;
              allTributes[3].exists = true;
            }}
          ></input>
        </div>
        <div class="reapingInputDistrict">
          <h2>District 3</h2>
          <div>Male</div>
          <input
            type="text"
            id="Dist3M"
            defaultValue=""
            onChange={(event) => {
              // MaleTributes[2].name = event.target.value;
              // MaleTributes[2].exists = true;
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
              // FemaleTributes[2].name = event.target.value;
              // FemaleTributes[2].exists = true;
              allTributes[5].name = event.target.value;
              allTributes[5].exists = true;
            }}
          ></input>
        </div>
        <div class="reapingInputDistrict">
          <h2>District 4</h2>
          <div>Male</div>
          <input
            type="text"
            id="Dist4M"
            defaultValue=""
            onChange={(event) => {
              // MaleTributes[3].name = event.target.value;
              // MaleTributes[3].exists = true;
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
              // FemaleTributes[3].name = event.target.value;
              // FemaleTributes[3].exists = true;
              allTributes[7].name = event.target.value;
              allTributes[7].exists = true;
            }}
          ></input>
        </div>
      </div>

      {/* 5,6,7,8 */}
      <div class="reapingInputRows">
        <div class="reapingInputDistrict">
          <h2>District 5</h2>
          <div>Male</div>
          <input
            type="text"
            id="Dist5M"
            defaultValue=""
            onChange={(event) => {
              // MaleTributes[4].name = event.target.value;
              // MaleTributes[4].exists = true;
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
              // FemaleTributes[4].name = event.target.value;
              // FemaleTributes[4].exists = true;
              allTributes[9].name = event.target.value;
              allTributes[9].exists = true;
            }}
          ></input>
        </div>
        <div class="reapingInputDistrict">
          <h2>District 6</h2>
          <div>Male</div>
          <input
            type="text"
            id="Dist6M"
            defaultValue=""
            onChange={(event) => {
              // MaleTributes[5].name = event.target.value;
              // MaleTributes[5].exists = true;
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
              // FemaleTributes[5].name = event.target.value;
              // FemaleTributes[5].exists = true;
              allTributes[11].name = event.target.value;
              allTributes[11].exists = true;
            }}
          ></input>
        </div>
        <div class="reapingInputDistrict">
          <h2>District 7</h2>
          <div>Male</div>
          <input
            type="text"
            id="Dist7M"
            defaultValue=""
            onChange={(event) => {
              // MaleTributes[6].name = event.target.value;
              // MaleTributes[6].exists = true;
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
              // FemaleTributes[6].name = event.target.value;
              // FemaleTributes[6].exists = true;
              allTributes[13].name = event.target.value;
              allTributes[13].exists = true;
            }}
          ></input>
        </div>
        <div class="reapingInputDistrict">
          <h2>District 8</h2>
          <div>Male</div>
          <input
            type="text"
            id="Dist8M"
            defaultValue=""
            onChange={(event) => {
              // MaleTributes[7].name = event.target.value;
              // MaleTributes[7].exists = true;
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
              // FemaleTributes[7].name = event.target.value;
              // FemaleTributes[7].exists = true;
              allTributes[15].name = event.target.value;
              allTributes[15].exists = true;
            }}
          ></input>
        </div>
      </div>

      {/* 9,10,11,12 */}
      <div class="reapingInputRows">
        <div class="reapingInputDistrict">
          <h2>District 9</h2>
          <div>Male</div>
          <input
            type="text"
            id="Dist9M"
            defaultValue=""
            onChange={(event) => {
              // MaleTributes[8].name = event.target.value;
              // MaleTributes[8].exists = true;
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
              // FemaleTributes[8].name = event.target.value;
              // FemaleTributes[8].exists = true;
              allTributes[17].name = event.target.value;
              allTributes[17].exists = true;
            }}
          ></input>
        </div>
        <div class="reapingInputDistrict">
          <h2>District 10</h2>
          <div>Male</div>
          <input
            type="text"
            id="Dist10M"
            defaultValue=""
            onChange={(event) => {
              // MaleTributes[9].name = event.target.value;
              // MaleTributes[9].exists = true;
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
              // FemaleTributes[9].name = event.target.value;
              // FemaleTributes[9].exists = true;
              allTributes[19].name = event.target.value;
              allTributes[19].exists = true;
            }}
          ></input>
        </div>
        <div class="reapingInputDistrict">
          <h2>District 11</h2>
          <div>Male</div>
          <input
            type="text"
            id="Dist11M"
            defaultValue=""
            onChange={(event) => {
              // MaleTributes[10].name = event.target.value;
              // MaleTributes[10].exists = true;
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
              // FemaleTributes[10].name = event.target.value;
              // FemaleTributes[10].exists = true;
              allTributes[21].name = event.target.value;
              allTributes[21].exists = true;
            }}
          ></input>
        </div>
        <div class="reapingInputDistrict">
          <h2>District 12</h2>
          <div>Male</div>
          <input
            type="text"
            id="Dist12M"
            defaultValue=""
            onChange={(event) => {
              // MaleTributes[11].name = event.target.value;
              // MaleTributes[11].exists = true;
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
              // FemaleTributes[11].name = event.target.value;
              // FemaleTributes[11].exists = true;
              allTributes[23].name = event.target.value;
              allTributes[23].exists = true;
            }}
          ></input>
        </div>
      </div>

      <br />
      <Link href="/bloodbath">Start the Games...</Link>
    </Layout>
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
