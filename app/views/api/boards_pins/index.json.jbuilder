@boards_pins.each do |boards_pin|
  json.set! boards_pin.id do 
    json.partial "/api/boards_pins/boards_pin", boards_pin: boards_pin
  end
end