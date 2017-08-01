const {
  over,
  map,
  compose,
  lensIndex,
  lensProp,
  filter,
  set,
  allPass,
  prop,
  propEq,
  toUpper,
  lt,
  curry,
  append
} = require("ramda");

const data = [
  {
    "_id": "5980ad34b0c4fd659858a26f",
    "index": 0,
    "guid": "d6a86f14-708f-4cc0-907a-936cbe94993d",
    "isActive": false,
    "balance": "$3,114.80",
    "picture": "http://placehold.it/32x32",
    "age": 37,
    "eyeColor": "blue",
    "name": "Carly Bernard",
    "gender": "female",
    "company": "EMTRAC",
    "email": "carlybernard@emtrac.com",
    "phone": "+1 (933) 539-3843",
    "address": "514 Division Place, Hampstead, Utah, 7167",
    "about": "Esse laboris fugiat dolore Lorem aute cupidatat consequat sit eiusmod tempor non nostrud est. Ex duis occaecat non nostrud adipisicing consectetur commodo non ad tempor eiusmod. Eiusmod non proident aliqua ex. Labore fugiat dolor enim in veniam deserunt laboris pariatur est minim.\r\n",
    "registered": "2014-06-23T01:21:47 -01:00",
    "latitude": -86.137481,
    "longitude": 101.509601,
    "tags": [
      "laborum",
      "est",
      "incididunt",
      "ex",
      "reprehenderit",
      "magna",
      "exercitation"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Hyde Rowe"
      },
      {
        "id": 1,
        "name": "Gilda Mcfarland"
      },
      {
        "id": 2,
        "name": "Erika Skinner"
      }
    ],
    "greeting": "Hello, Carly Bernard! You have 1 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "5980ad34864b912287275d6e",
    "index": 1,
    "guid": "269906a0-b044-4f86-8d16-23f506b53ef9",
    "isActive": true,
    "balance": "$1,413.67",
    "picture": "http://placehold.it/32x32",
    "age": 30,
    "eyeColor": "brown",
    "name": "Ada Davenport",
    "gender": "female",
    "company": "OBLIQ",
    "email": "adadavenport@obliq.com",
    "phone": "+1 (808) 564-2860",
    "address": "519 Devon Avenue, Brownsville, Delaware, 1159",
    "about": "Aliqua anim veniam do aliqua tempor dolore fugiat et excepteur cillum ea cupidatat quis tempor. Adipisicing pariatur culpa pariatur elit excepteur irure sit aliqua duis officia occaecat officia cillum consequat. Eu voluptate sunt adipisicing ullamco veniam consectetur. Minim ea aliquip esse tempor non Lorem ipsum deserunt eu consectetur est laborum amet. Duis consequat nulla dolor nostrud commodo ullamco nostrud anim in cupidatat pariatur. Id qui dolore veniam commodo consectetur do exercitation esse esse labore do enim culpa. Ut magna do ullamco ex dolor adipisicing aliquip excepteur consectetur fugiat labore excepteur est ex.\r\n",
    "registered": "2016-04-21T05:30:36 -01:00",
    "latitude": -83.047562,
    "longitude": -94.268014,
    "tags": [
      "proident",
      "duis",
      "deserunt",
      "incididunt",
      "nulla",
      "mollit",
      "exercitation"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Berger Ingram"
      },
      {
        "id": 1,
        "name": "Beatrice Levine"
      },
      {
        "id": 2,
        "name": "Sellers Cooke"
      }
    ],
    "greeting": "Hello, Ada Davenport! You have 3 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5980ad347d8e187e0055cba5",
    "index": 2,
    "guid": "e1006e7a-4525-4a1a-92ae-236706717c04",
    "isActive": false,
    "balance": "$2,774.13",
    "picture": "http://placehold.it/32x32",
    "age": 31,
    "eyeColor": "green",
    "name": "Thompson Salas",
    "gender": "male",
    "company": "CANDECOR",
    "email": "thompsonsalas@candecor.com",
    "phone": "+1 (871) 408-2779",
    "address": "396 Overbaugh Place, Cleary, Nebraska, 3424",
    "about": "Nostrud in sint consectetur ad culpa anim consequat proident ex dolor adipisicing quis qui. Laboris elit nulla ut ullamco et proident anim occaecat fugiat exercitation est. Sint ut fugiat occaecat sit consequat aliquip velit elit esse adipisicing aliquip veniam. Officia dolor ullamco do adipisicing aute. In quis mollit aliqua id cupidatat.\r\n",
    "registered": "2014-11-13T02:12:42 -00:00",
    "latitude": -58.586691,
    "longitude": 85.983587,
    "tags": [
      "culpa",
      "in",
      "veniam",
      "sunt",
      "duis",
      "adipisicing",
      "ex"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Lynnette Mclean"
      },
      {
        "id": 1,
        "name": "Tasha Yates"
      },
      {
        "id": 2,
        "name": "Milagros Medina"
      }
    ],
    "greeting": "Hello, Thompson Salas! You have 7 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5980ad34e2b8657fcc9319b3",
    "index": 3,
    "guid": "4878bde1-34eb-4157-988f-5655599fa2e1",
    "isActive": false,
    "balance": "$3,875.20",
    "picture": "http://placehold.it/32x32",
    "age": 35,
    "eyeColor": "blue",
    "name": "Nunez Preston",
    "gender": "male",
    "company": "MANTRO",
    "email": "nunezpreston@mantro.com",
    "phone": "+1 (893) 578-2750",
    "address": "343 Vermont Street, Kaka, New York, 5184",
    "about": "Esse ea cupidatat sit ullamco dolore qui excepteur magna et anim reprehenderit eu non tempor. Labore nostrud enim fugiat exercitation occaecat. Deserunt fugiat proident eu non cupidatat anim non reprehenderit pariatur nisi. Deserunt Lorem esse exercitation laboris et commodo occaecat sint voluptate.\r\n",
    "registered": "2015-02-10T09:20:19 -00:00",
    "latitude": 14.558906,
    "longitude": -72.676917,
    "tags": [
      "eiusmod",
      "proident",
      "cupidatat",
      "duis",
      "laboris",
      "aute",
      "ad"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Wall Pace"
      },
      {
        "id": 1,
        "name": "Yang Cross"
      },
      {
        "id": 2,
        "name": "Buckley Oconnor"
      }
    ],
    "greeting": "Hello, Nunez Preston! You have 2 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5980ad34a84b27747f7d5fbc",
    "index": 4,
    "guid": "ca7d04bb-97ea-4658-a410-2dc46f4fab65",
    "isActive": false,
    "balance": "$2,910.44",
    "picture": "http://placehold.it/32x32",
    "age": 33,
    "eyeColor": "green",
    "name": "Haley Carpenter",
    "gender": "male",
    "company": "FANFARE",
    "email": "haleycarpenter@fanfare.com",
    "phone": "+1 (887) 553-2891",
    "address": "922 Chapel Street, Bluetown, Tennessee, 4672",
    "about": "Fugiat minim in et ipsum. Consectetur reprehenderit tempor consequat aliqua consectetur et commodo. Laborum culpa tempor labore est. Non occaecat eu sint non dolor id commodo proident culpa aute proident officia. Ea consequat non pariatur sit aliqua ut. Ipsum culpa sint exercitation id aliquip sint nostrud quis minim irure proident mollit commodo. Occaecat cupidatat veniam ad excepteur ea elit nisi aliquip irure.\r\n",
    "registered": "2014-03-12T12:29:59 -00:00",
    "latitude": -82.306276,
    "longitude": 73.52421,
    "tags": [
      "do",
      "adipisicing",
      "ad",
      "tempor",
      "est",
      "duis",
      "quis"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Lawrence Kim"
      },
      {
        "id": 1,
        "name": "Pollard Haney"
      },
      {
        "id": 2,
        "name": "Travis Witt"
      }
    ],
    "greeting": "Hello, Haley Carpenter! You have 1 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "5980ad34508b958edea4acad",
    "index": 5,
    "guid": "11fbdbe5-e9a5-4890-a3a7-1ce0e0fc45b6",
    "isActive": true,
    "balance": "$2,723.05",
    "picture": "http://placehold.it/32x32",
    "age": 22,
    "eyeColor": "green",
    "name": "Jennings Armstrong",
    "gender": "male",
    "company": "TALKOLA",
    "email": "jenningsarmstrong@talkola.com",
    "phone": "+1 (872) 573-3622",
    "address": "448 Bethel Loop, Urie, Connecticut, 3703",
    "about": "Ullamco id nostrud occaecat nisi nisi ut pariatur est. Dolor cupidatat commodo aute exercitation officia dolor ex. Quis cupidatat consequat dolor ut do culpa ex consequat dolor esse. Culpa dolor officia sit irure velit amet dolor duis minim ullamco ea. Excepteur aute sunt esse dolore ipsum pariatur laboris voluptate consequat. Enim eiusmod mollit occaecat reprehenderit consectetur.\r\n",
    "registered": "2015-05-30T01:26:43 -01:00",
    "latitude": 65.512872,
    "longitude": -170.513128,
    "tags": [
      "veniam",
      "nulla",
      "officia",
      "anim",
      "eiusmod",
      "sint",
      "ea"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Letha Torres"
      },
      {
        "id": 1,
        "name": "Farley Gilbert"
      },
      {
        "id": 2,
        "name": "Buchanan Dodson"
      }
    ],
    "greeting": "Hello, Jennings Armstrong! You have 8 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "5980ad3403ecd2b146b9f83b",
    "index": 6,
    "guid": "9e8c61f5-8bb5-4671-9c42-a15d43bc2cf4",
    "isActive": false,
    "balance": "$2,272.23",
    "picture": "http://placehold.it/32x32",
    "age": 20,
    "eyeColor": "blue",
    "name": "George Schmidt",
    "gender": "male",
    "company": "EMPIRICA",
    "email": "georgeschmidt@empirica.com",
    "phone": "+1 (942) 446-2664",
    "address": "121 Congress Street, Berwind, Mississippi, 3935",
    "about": "Labore irure fugiat velit magna commodo adipisicing in est culpa pariatur tempor incididunt ea nisi. Eu minim ex ea laboris nisi eiusmod minim. Dolore incididunt magna laboris esse dolore occaecat incididunt excepteur enim elit laboris. Officia officia dolor nulla dolore aute nostrud reprehenderit occaecat ad. Sint laboris ullamco deserunt voluptate consectetur incididunt do nostrud. Do exercitation ex tempor eu nostrud ex ipsum. Consequat excepteur ipsum nisi ipsum.\r\n",
    "registered": "2015-01-28T11:04:20 -00:00",
    "latitude": -21.930731,
    "longitude": 117.203876,
    "tags": [
      "aliquip",
      "commodo",
      "eu",
      "dolore",
      "sunt",
      "irure",
      "ut"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Bryant Roman"
      },
      {
        "id": 1,
        "name": "Humphrey Smith"
      },
      {
        "id": 2,
        "name": "Melanie Henry"
      }
    ],
    "greeting": "Hello, George Schmidt! You have 4 unread messages.",
    "favoriteFruit": "banana"
  }
]

// Map
const eyeColours = map(prop("eyeColor"));

// Filter
const greenEyesOnly = filter(propEq("eyeColor", "green"));

// Compose
const onlyGreenEyesAndColoursOnly = compose(eyeColours, greenEyesOnly);
onlyGreenEyesAndColoursOnly(data);

// Point free style
const greet = (greeting, name) => `${greeting}, ${name}!`;
const greetCurried = curry(greet); 

greet("Hey") // Hey, undefined
const sayHey = greetCurried("Hey"); // function(name) { return "Hey, " + name }

const emphasize0 = (word, symbol) => `${word}${symbol}`;
const emphasize1 = (symbol, word) => `${word}${symbol}`;
const emphasize2 = (symbol) => (word) => `${word}${symbol}`;
const emphasize3 = curry((symbol, word) => `${word}${symbol}`);

const shoutHey = compose(emphasize3("?"), toUpper, sayHey);
shoutHey("Dan"); // HEY, DAN!


// Normal version
const ageMoreThan = (limit, age) => age > limit;

const eyeColorIs = (criteria, colour) => criteria === colour;

const ageMoreThan20AndEyeColorGreen = (person) => {
  return ageMoreThan(20, person.age) && eyeColorIs("green", person.eyeColor);
}
data.filter(ageMoreThan20AndEyeColorGreen);


// Ramda Version
const _ageMoreThan20 = compose(lt(20), prop("age"));
const _eyeColorIs = propEq("eyeColor");
const _ageMoreThan20AndEyeColorGreen = allPass([_ageMoreThan20, _eyeColorIs("green")]);


filter(_ageMoreThan20AndEyeColorGreen, data);

//Lenses
const friendsLens = lensProp("friends");

const noMates = set(friendsLens, []);

const matesWithStevie = over(friendsLens, append({
    name: "Stevie Ringland",
    location: "McDonalds"
}));

map(matesWithStevie, data);


// More Complex Example 
const lastIndexLens = lensIndex(-1);

const upperCaseName = over(lensProp("name"), toUpper);

const upperCaseFriendNames = over(friendsLens, map(upperCaseName));

over(lastIndexLens, upperCaseFriendNames, data);






