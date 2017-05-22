class CreatePinnings < ActiveRecord::Migration[5.0]
  def change
    create_table :pinnings do |t|
      t.integer :board_id, null: false
      t.integer :pin_id, null: false

      t.timestamps
    end

    add_index :pinnings, :board_id, unique: true
    add_index :pinnings, :pin_id, unique: true
  end
end
