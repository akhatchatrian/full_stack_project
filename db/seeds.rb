# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

StyleProfileItem.destroy_all

spi1 = StyleProfileItem.create!(gender: "unisex", category: "intro", category_item: "1")
spi2 = StyleProfileItem.create!(gender: "unisex", category: "stats", category_item: "2")
spi3 = StyleProfileItem.create!(gender: "unisex", category: "fit", category_item: "3")
spi4 = StyleProfileItem.create!(gender: "unisex", category: "style", category_item: "4")

StyleProfileValue.destroy_all

spv1 = StyleProfileValue.create!(profile_item_id: spi1.id, value: "") 
spv2 = StyleProfileValue.create!(profile_item_id: spi2.id, value: "") 
spv3 = StyleProfileValue.create!(profile_item_id: spi3.id, value: "") 
spv4 = StyleProfileValue.create!(profile_item_id: spi4.id, value: "") 