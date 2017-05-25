json.extract! pin, :id, :name, :description, :image_url, :user_id
json.set! :creator_image_url, pin.creator.image_url

json.pinned_boards do
  pin.boards.each do |board|
    json.set! board.id, board.id
  end
end
