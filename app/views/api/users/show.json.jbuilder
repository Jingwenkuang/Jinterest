 json.partial! "api/users/user", user: @user 


# json.users do
#   json.set! @user.id do
#     json.partial! "api/users/user", user: @user
#     json.boardIds @user.boards.pluck(:id)
#   end
# end

 json.boards do
   @user.boards.each do |board|
     json.set! board.id do
       json.partial! "api/boards/board", board: board
       json.pinIds board.pins.pluck(:id)
     end
   end
 end

json.boardsPins do
  @user.boards_pins.each do |boardPin|
    json.set! boardPin.id do
      json.extract! boardPin, :board_id, :pin_id
    end
  end
end

 json.pins do
   @user.pins.each do |pin|
     json.set! pin.id do
       json.partial! "api/pins/pin", pin: pin
     end
   end
 end