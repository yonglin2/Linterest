# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

pin1 = Pin.create!(name: "red beach", description: "Very red", image_url: "https://s-media-cache-ak0.pinimg.com/564x/7f/f2/3e/7ff23e3b39f581a72d8eee1979687ad3.jpg")
pin2 = Pin.create!(name: "moon branch", description: "Very serene", image_url: "https://s-media-cache-ak0.pinimg.com/564x/e6/98/a3/e698a38df6ac2e4e5802cc8e6d63ee75.jpg")
pin3 = Pin.create!(name: "cool wooden room", description: "Is it a sauna?", image_url: "https://s-media-cache-ak0.pinimg.com/564x/e6/c9/3a/e6c93a1818c2e9f1b165f4c63fdbc56d.jpg")
