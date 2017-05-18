@pins.each do |pin|
  json.set! pin.id do
    json.extract! pin, :id, :name, :description, :image_url
  end
end
