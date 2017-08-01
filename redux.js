

const state = {
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
    "enemies": {
      "0": {
        "name": "Hyde Rowe"
      }, 
      "1": {        
        "name": "Hyde Rowe"
      }, 
    },
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
};

const enemyLens = (id) => lensPath(["enemies", id]);

const friendLens = lensProp("friends");

const registerReducer = (initialState, reducers) => {
  return (state = initialState, action) => {
    if (state === undefined) {
      return state;
    }

    const handler = reducers[action.type];

    return handler ? handler(state, action) : state;
  };
};

const ADD_ENEMY = "ADD_ENEMY";
const UPDATE_ENEMY_GENDER = "UPDATE_FRIEND_GENDER";
const MAKE_ENEMY_FRIEND = "MAKE_ENEMY_FRIEND";

const testReducer = registerReducer(state, {
  [UPDATE_ENEMY_GENDER]: (state, { id, gender }) => 
      assocPath(["enemies", id, "gender"], gender, state),
  [ADD_ENEMY]: (state, { enemy }) => 
      assocPath(["enemies", enemy.id], enemy, state),
  [MAKE_ENEMY_FRIEND] : (state, { id } ) => {
    const enemy = state.enemies[id];   
    return over(friendLens, append(enemy), dissocPath(["enemies", id], state));
  }
});


testReducer(state, {
    type: UPDATE_ENEMY_GENDER,
    id: 0, 
    gender: "male"
});

testReducer(state, {
    type: ADD_ENEMY,
    enemy: {
      id: 2,
      name: "Dan Skelton"
    }
});

testReducer(state, {
  type: MAKE_ENEMY_FRIEND,
  id: 0
});


const mapStateToProps = pick(["app", "other"]);

