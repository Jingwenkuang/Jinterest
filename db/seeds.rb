# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all 
Pin.destroy_all

user1 = User.create!(
  email: 'land@gmail.com',
  username: 'land',
  first_name: 'la',
  last_name: 'nd',
  age: '17',
  description: 'green land',
  location: 'Montana',
  password: '123456',
)

user2 = User.create!(
  email: 'daylight@gmail.com',
  username: 'daylight',
  first_name: 'day',
  last_name: 'light',
  age: '18',
  description: 'Sunny day',
  location: 'California',
  password: '123456'
)

user3 = User.create!(
  email: 'sunshine@gmail.com',
  username: 'sunshine',
  first_name: 'sun',
  last_name: 'shine',
  age: '21',
  description: 'Bright day',
  location: 'California',
  password: '123456'
)

user4 = User.create!(
  email: 'flower@gmail.com',
  username: 'flower',
  first_name: 'flo',
  last_name: 'wer',
  age: '21',
  description: 'I like tulips',
  location: 'California',
  password: '123456'
)

pin1 = Pin.new(
   title: 'brunch',
   description: "Enjoy some yummy breakfast",
   user_id: user1.id,
)
file = open("https://jinterest-seeds.s3-us-west-1.amazonaws.com/brunch.jpg")
pin1.photo.attach(io: file, filename: 'brunch.jpg')
pin1.save!

pin2 = Pin.new(
   title: 'cathedral',
   description: "Cathedral in Florence",
   user_id: user1.id,
)
file = open("https://jinterest-seeds.s3-us-west-1.amazonaws.com/cathedral_in_florence.jpg")
pin2.photo.attach(io: file, filename: 'cathedral_in_florence.jpg')
pin2.save!

pin3 = Pin.new(
   title: 'colosseum',
   description: "Stunning architecture",
   user_id: user1.id,
)
file = open("https://jinterest-seeds.s3-us-west-1.amazonaws.com/colosseum.jpg")
pin3.photo.attach(io: file, filename: 'colosseum.jpg')
pin3.save!

pin4 = Pin.new(
   title: 'crater lake',
   description: "Blue sky and blue lake are connected together",
   user_id: user1.id,
)
file = open("https://jinterest-seeds.s3-us-west-1.amazonaws.com/crater_lake.jpg")
pin4.photo.attach(io: file, filename: 'crater_lake.jpg')
pin4.save!

pin5 = Pin.new(
   title: 'fontana di trevi',
   description: "Make a wish in front of fontana di trevi",
   user_id: user1.id,
)
file = open("https://jinterest-seeds.s3-us-west-1.amazonaws.com/fontana_di_trevi.jpg")
pin5.photo.attach(io: file, filename: 'fontana_di_trevi.jpg')
pin5.save!

 pin6 = Pin.new(
    title: 'food in NY',
    description: "The food that we ate in NY",
    user_id: user1.id,
 )
 file = open("https://jinterest-seeds.s3-us-west-1.amazonaws.com/food_in_ny.jpg")
 pin6.photo.attach(io: file, filename: 'food_in_ny.jpg')
 pin6.save!

 pin7 = Pin.new(
    title: 'hometown',
    description: "childhood buddies",
    user_id: user1.id,
 )
 file = open("https://jinterest-seeds.s3-us-west-1.amazonaws.com/hometown.jpg")
 pin7.photo.attach(io: file, filename: 'hometown.jpg')
 pin7.save!
 
pin8 = Pin.new(
   title: 'local food in Rome',
   description: "Itilian food",
   user_id: user1.id,
)
file = open("https://jinterest-seeds.s3-us-west-1.amazonaws.com/local_food_in_rome.jpg")
pin8.photo.attach(io: file, filename: 'local_food_in_rome.jpg')
pin8.save!

pin9 = Pin.new(
   title: 'local food in Taiwan',
   description: "Mango shave ice is the best",
   user_id: user1.id,
)
file = open("https://jinterest-seeds.s3-us-west-1.amazonaws.com/local_food_in_taiwan.jpg")
pin9.photo.attach(io: file, filename: 'local_food_in_taiwan.jpg')
pin9.save!

pin10 = Pin.new(
   title: 'muir woord',
   description: "The longest hiked",
   user_id: user1.id,
)
file = open("https://jinterest-seeds.s3-us-west-1.amazonaws.com/muir_wood.jpg")
pin10.photo.attach(io: file, filename: 'muir_wood.jpg')
pin10.save!

pin11 = Pin.new(
   title: 'night view in NY',
   description: "Beautiful night and memories",
   user_id: user1.id,
)
file = open("https://jinterest-seeds.s3-us-west-1.amazonaws.com/newyork_night.jpg")
pin11.photo.attach(io: file, filename: 'newyork_night.jpg')
pin11.save!

pin12 = Pin.new(
   title: 'noodle soup',
   description: "In a hot day, eatting hot noodle soup",
   user_id: user1.id,
)
file = open("https://jinterest-seeds.s3-us-west-1.amazonaws.com/noodle_soup.jpg")
pin12.photo.attach(io: file, filename: 'noodle_soup.jpg')
pin12.save!

pin13 = Pin.new(
   title: 'ri yue tan pool',
   description: "Remind me the day in taiwan",
   user_id: user1.id,
)
file = open("https://jinterest-seeds.s3-us-west-1.amazonaws.com/riyuetanpool.jpg")
pin13.photo.attach(io: file, filename: 'riyuetanpool.jpg')
pin13.save!

pin14 = Pin.new(
   title: 'roman forum',
   description: "The day in Rome",
   user_id: user1.id,
)
file = open("https://jinterest-seeds.s3-us-west-1.amazonaws.com/roman_forum.jpg")
pin14.photo.attach(io: file, filename: 'roman_forum.jpg')
pin14.save!

pin15 = Pin.new(
   title: 'sign',
   description: "In Jackson town",
   user_id: user1.id,
)
file = open("https://jinterest-seeds.s3-us-west-1.amazonaws.com/sign.jpg")
pin15.photo.attach(io: file, filename: 'sign.jpg')
pin15.save!

pin16 = Pin.new(
   title: 'sign on the wall',
   description: "Random photo in NY",
   user_id: user1.id,
)
file = open("https://jinterest-seeds.s3-us-west-1.amazonaws.com/sign_on_wall.jpg")
pin16.photo.attach(io: file, filename: 'sign_on_wall.jpg')
pin16.save!

pin17 = Pin.new(
   title: 'spices',
   description: "Different kind of spices",
   user_id: user1.id,
)
file = open("https://jinterest-seeds.s3-us-west-1.amazonaws.com/spices.jpg")
pin17.photo.attach(io: file, filename: 'spices.jpg')
pin17.save!

pin18 = Pin.new(
   title: 'squirrel',
   description: "So cute",
   user_id: user1.id,
)
file = open("https://jinterest-seeds.s3-us-west-1.amazonaws.com/squirrel.jpg")
pin18.photo.attach(io: file, filename: 'squirrel.jpg')
pin18.save!

pin19 = Pin.new(
   title: 'street view',
   description: "Walked on a street in Florence",
   user_id: user1.id,
)
file = open("https://jinterest-seeds.s3-us-west-1.amazonaws.com/street_view.jpg")
pin19.photo.attach(io: file, filename: 'street_view.jpg')
pin19.save!

pin20 = Pin.new(
   title: 'venice',
   description: "Relaxing city",
   user_id: user1.id,
)
file = open("https://jinterest-seeds.s3-us-west-1.amazonaws.com/venice.jpg")
pin20.photo.attach(io: file, filename: 'venice.jpg')
pin20.save!

pin21 = Pin.new(
   title: 'gondona',
   description: "Gondona in Venice",
   user_id: user1.id,
)
file = open("https://jinterest-seeds.s3-us-west-1.amazonaws.com/venice_veneto.jpg")
pin21.photo.attach(io: file, filename: 'venice_veneto.jpg')
pin21.save!

pin22 = Pin.new(
   title: 'snow',
   description: "Winter in tahoe",
   user_id: user1.id,
)
file = open("https://jinterest-seeds.s3-us-west-1.amazonaws.com/winter_in_tahoe.jpg")
pin22.photo.attach(io: file, filename: 'winter_in_tahoe.jpg')
pin22.save!

pin23 = Pin.new(
   title: 'yellowstone',
   description: "The best national park",
   user_id: user1.id,
)
file = open("https://jinterest-seeds.s3-us-west-1.amazonaws.com/yellowStone.jpg")
pin23.photo.attach(io: file, filename: 'yellowStone.jpg')
pin23.save!

pin24 = Pin.new(
   title: 'zion national park',
   description: "That was a rainy day",
   user_id: user1.id,
)
file = open("https://jinterest-seeds.s3-us-west-1.amazonaws.com/zioin_national_park.jpg")
pin24.photo.attach(io: file, filename: 'zioin_national_park.jpg')
pin24.save!

pin25 = Pin.new(
   title: 'arches national park',
   description: "In a very windy day",
   user_id: user1.id,
)
file = open("https://jinterest-seeds.s3-us-west-1.amazonaws.com/arches_national_park.jpg")
pin25.photo.attach(io: file, filename: 'arches_national_park.jpg')
pin25.save!