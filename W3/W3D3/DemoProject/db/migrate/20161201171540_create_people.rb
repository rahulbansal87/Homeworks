class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.text :name, null: false
      t.integer :house_id, null: false
      t.timestamps
    end
  end
end
