class CreatePins < ActiveRecord::Migration[5.0]
  def change
    create_table :pins do |t|
      t.string :name, null: false
      t.string :image_url, null: false
      t.text :description

      t.timestamps
    end
  end
end
