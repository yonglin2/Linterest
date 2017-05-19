@pins.each do |pin|
  json.set! pin.id do
    json.extract! pin, :id, :image_url
  end
end
