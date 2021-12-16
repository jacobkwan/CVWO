class AddConstraintsToTasks < ActiveRecord::Migration[6.1]
  def change
    change_column_null :tasks, :title, false
    change_column_null :tasks, :completed, false
    change_column_null :tasks, :urgent, false
    change_column_null :tasks, :deleted, false
  end
end
