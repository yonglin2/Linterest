class AddConstraintsToFollows < ActiveRecord::Migration[5.0]
  def change
    remove_column :follows, :follower_id
    add_column :follows, :follower_id, :integer, null: false
  end
end
