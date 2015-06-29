# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

30.times {
  Post.create({
    username: Faker::Name.name,
    title: Faker::Company.bs,
    content: Faker::Lorem.paragraph(4, true, 10),
    time: "06 28, 2015 @ 9:16 PM"
    })
}
