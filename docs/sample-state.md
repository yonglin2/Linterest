```js
{
  currentUser: {
    id: 1,
    username: "app-academy"
  },

  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    createBoard: {errors: []}
  },

  pins: {
    3: {
      name: "Yosemite",
      image_url: "www.imgur.com",
      description: "Everybody has a photo of this."
      board_id: []
    }
  },

  boards: {
    1: {
      name: "Photos",
      description: "Landscape",
      user: 2,
      pins: [
        2: {
          name: "Some River",
          image_url: "www.someurl.com",
          description: "It flows.",
          board_id: [1, 3]
        }
      ]
    }
  },

  follows: {
    followers: [],
    followees: []
  }
}
```
