class CreateBoards < ActiveRecord::Migration[5.0]
  def change
    create_table :boards do |t|
      t.string :title, null: false
      t.integer :user_id, null: false
      t.text :description

      t.timestamps
    end
  end
end
