```js
{
  session: {
    currentUser: {
      id: 1,
      username: "app-academy"
    },
    errors: []
  }

  pins: {
    3: {
      name: "Yosemite",
      image_url: "www.imgur.com",
      description: "Everybody has a photo of this."
      board_id: []
    },

    errors: []
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
    },

    errors: []
  },

  follows: {
    followers: [],
    followees: []
  }
}
```
