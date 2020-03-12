# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Inventory.destroy_all

im1 = Inventory.create!(category: "sweater", brand: "Calvin Klein", price: 119.50, color: "blue", size: "m", gender: "male", "quantity": 4)
im4_1 = Inventory.create!(category: "shirt", brand: "Bonobos", price: 43.00, color: "purple", size: "m", gender: "male", "quantity": 2)
im4_2 = Inventory.create!(category: "shirt", brand: "Bonobos", price: 43.00, color: "purple", size: "s", gender: "male", "quantity": 2)
im4_3 = Inventory.create!(category: "shirt", brand: "Bonobos", price: 43.00, color: "purple", size: "l", gender: "male", "quantity": 2)
