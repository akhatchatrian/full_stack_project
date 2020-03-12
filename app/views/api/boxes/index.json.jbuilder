@boxes.each do |box|
    json.set! box.id do
      json.partial! 'api/boxes/boxes', box: box
    end
end
  