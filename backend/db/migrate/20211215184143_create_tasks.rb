class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.references :category, null: false, foreign_key: true
      t.string :title
      t.string :content
      t.boolean :completed
      t.boolean :urgent
      t.boolean :deleted
      t.string :deadline

      t.timestamps
    end
  end
end
