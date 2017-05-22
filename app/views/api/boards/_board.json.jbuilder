json.extract! board, :id, :user_id

json.pins board.pins.each do |comment|
  json.partial! 'api/pins/pin', pin: pin
end
