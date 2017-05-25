class CreateFollows < ActiveRecord::Migration[5.0]
  def change
    create_table :follows do |t|
      t.integer :follower_id
      t.integer :following_id

      t.timestamps

      t.index :follower_id
      t.index :following_id
    end
  end
end
