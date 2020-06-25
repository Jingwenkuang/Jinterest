# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all 

user1 = User.create(
  email: 'land@gmail.com',
  username: 'land',
  first_name: 'la',
  last_name: 'nd',
  age: '17',
  description: 'green land',
  location: 'Montana'
)

user2 = User.create(
  email: 'daylight@gmail.com',
  username: 'daylight',
  first_name: 'day',
  last_name: 'light',
  age: '18',
  description: 'Sunny day',
  location: 'California'
)
