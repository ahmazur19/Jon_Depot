# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "faker"

Department.destroy_all
Item.destroy_all

10.times do 
	dep = Department.create(
		name: Faker::Construction.subcontract_category,

	)
	3.times do
		dep.items.create(
			name: Faker::Construction.heavy_equipment,
			price: Faker::Commerce.price,
			brand: Faker::Appliance.brand,

	)
	end
end

puts "seeded #{Department.all.size} departments"
puts "seeded #{Item.all.size} items"
