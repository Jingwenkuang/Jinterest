#json.partial! "api/pins/pin", pin: @pin 

json.set! @pin.id do
  json.partial! "api/pins/pin", pin: @pin
  json.boardName @pin.boards.pluck(:title)[0]
  json.user do
    json.partial! "api/users/user", user: @pin.user
  end
end