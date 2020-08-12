# @boardsPins.each do |boardPin|
#   json.set! boardPin.id do 
#     json.partial "/api/boards_pins/boardPin", boardPin: boardPin
#   end
# end

@boardsPins.each do |bp|
    json.set! bp.id do
        json.extract! bp, :board_id, :pin_id
    end
end