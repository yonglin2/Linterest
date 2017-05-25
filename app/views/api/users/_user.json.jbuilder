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

json.followers do
  user.followers.each do |follower|
    json.set! follower.id do
      json.extract! follower, :id, :image_url
    end
  end
end

json.followings do
  user.followings.each do |following|
    json.set! following.id do
      json.extract! following, :id, :image_url
    end
  end
end

if current_user
  if user.followers.exists?(id: current_user.id)
    json.followed true
  else
    json.followed false
  end
end
