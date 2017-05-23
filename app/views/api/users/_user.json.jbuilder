json.extract! user, :id, :username, :description, :image_url

json.pins do
  user.pins.each do |pin|
    json.set! pin.id do
      json.partial! 'api/pins/pin.json.jbuilder', pin: pin
    end
  end
end

json.boards do
  user.boards.each do |board|
    json.set! board.id do
      json.partial! 'api/boards/board.json.jbuilder', board: board
    end
  end
end

json.own_pins do
  user.own_pins.each do |pin|
    json.set! pin.id do
      json.partial! 'api/pins/pin.json.jbuilder', pin: pin
    end
  end
end
