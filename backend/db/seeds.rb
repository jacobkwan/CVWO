# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
users = User.create(
  [
    {
      name: 'jacob',
      password: 'pw123'
    },
    {
      name: 'john',
      password: 'pw123'
    }
  ]
)
categories = users.first.categories.create(
  [
    {title: "General"},
    {title: "School"}
  ]
)
general = categories.first
school = categories.second
general_tasks = general.tasks.create!(
  [
    {
      title: "Pay Bills",
      completed: false,
      urgent: true,
      deleted: false
    },
    {
      title: "Cook Dinner",
      completed: true,
      urgent: false,
      deleted: false
    }
  ]
)
school_tasks = school.tasks.create!(
  [
    {
      title: "Study for Test",
      completed: false,
      urgent: true,
      deleted: false
    },
    {
      title: "Do Tutorial",
      completed: true,
      urgent: false,
      deleted: false
    }
  ]
)
