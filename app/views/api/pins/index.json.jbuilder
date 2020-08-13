@pins.each do |pin|
  json.set! pin.id do 
    json.partial! "api/pins/pin", pin: pin
    json.boardId pin.boards.pluck(:id)[0]
  end
end

# json.users do
#   json.set! @user.id do
#     json.partial! "api/users/user", user: @user
#     json.boardIds @user.boards.pluck(:id)
#   end
# end





