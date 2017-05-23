# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create!(username: "guest", password: "password", image_url: "http://res.cloudinary.com/dbmxr3ior/image/upload/v1495485323/vhvr5jwtjouuzujpfzwh.png", description: "What's up, dog?")
user2 = User.create!(username: "yong", password: "password", image_url: "http://res.cloudinary.com/dbmxr3ior/image/upload/v1495351916/nrztsokinadfklw0sbuo.jpg", description: "Hire me!")

pin1 = Pin.create!(name: "red beach", description: "Very red", image_url: "https://s-media-cache-ak0.pinimg.com/564x/7f/f2/3e/7ff23e3b39f581a72d8eee1979687ad3.jpg" )
pin2 = Pin.create!(name: "moon branch", description: "Very serene", image_url: "https://s-media-cache-ak0.pinimg.com/564x/e6/98/a3/e698a38df6ac2e4e5802cc8e6d63ee75.jpg", user_id: 1)
pin3 = Pin.create!(name: "cool wooden room", description: "Is it a sauna?", image_url: "https://s-media-cache-ak0.pinimg.com/564x/e6/c9/3a/e6c93a1818c2e9f1b165f4c63fdbc56d.jpg", user_id: 2)
pin4 = Pin.create!(name: "foggy lake", description: "spooky", image_url: "https://s-media-cache-ak0.pinimg.com/564x/f4/be/ec/f4beec34708a3b724655591aa05118cc.jpg", user_id: 2)
pin5 = Pin.create!(name: "waterfall", description: "beautiful", image_url: "https://s-media-cache-ak0.pinimg.com/564x/a1/57/38/a15738941445cb9de30ce863df8c25d3.jpg", user_id: 1)
pin6 = Pin.create!(name: "broken dock", description: "great backdrop", image_url: "https://s-media-cache-ak0.pinimg.com/564x/74/23/9c/74239c782f11413155caea49624555a4.jpg", user_id: 1)
pin7 = Pin.create!(name: "desert", description: "dry", image_url: "https://s-media-cache-ak0.pinimg.com/564x/8f/5c/0f/8f5c0f6de73511ac3677d6130fc39ac7.jpg", user_id: 1)
pin8 = Pin.create!(name: "lake", description: "a sliver", image_url: "https://s-media-cache-ak0.pinimg.com/564x/9c/5e/f4/9c5ef4906dd12535dde76234af059a11.jpg", user_id: 1)
pin9 = Pin.create!(name: "dark mountain", description: "dawn or dusk?", image_url: "https://s-media-cache-ak0.pinimg.com/564x/5d/af/d7/5dafd762fafa1d649867d1189c66205d.jpg", user_id: 1)
pin10 = Pin.create!(name: "single swan", description: "real swan?", image_url: "https://s-media-cache-ak0.pinimg.com/564x/51/82/0a/51820a25d9d105138e6e97a6fe4f3c66.jpg", user_id: 1)
pin11 = Pin.create!(name: "tomatoes", description: "super red and ripe", image_url: "http://farm4.static.flickr.com/3605/5739526869_e47d3616f3_o.gif", user_id: 1)
pin12 = Pin.create!(name: "cloudy mountains", description: "mysterious and majestic", image_url: "http://res.cloudinary.com/dbmxr3ior/image/upload/v1495237546/photo-1469053913977-1d2f009670d9_g55xsg.jpg", user_id: 1)

board1 = Board.create!(title: "board1", description: "test1", user_id: 1)
board2 = Board.create!(title: "board2", description: "test2", user_id: 1)
board3 = Board.create!(title: "board3", description: "test3", user_id: 1)
board4 = Board.create!(title: "board4", description: "test4", user_id: 1)
board5 = Board.create!(title: "yongboard", description: "yongdescription", user_id: 2)

pinning1 = Pinning.create!(board_id: 1, pin_id: 1)
pinning2 = Pinning.create!(board_id: 1, pin_id: 2)
pinning3 = Pinning.create!(board_id: 1, pin_id: 3)
pinning4 = Pinning.create!(board_id: 1, pin_id: 4)
pinning5 = Pinning.create!(board_id: 5, pin_id: 4)
