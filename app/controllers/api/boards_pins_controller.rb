class Api::BoardsPinsController < ApplicationController

  before_action :require_login 

  def index 
    @boards_pins = BoardsPins.all 
    render "/api/boards_pins/index"
  end

  def create 
    @board_pins = BoardsPins.new(boards_pin_params)
    if @board_pins.save 
      render "/api/boards_pins/show"
    else
      render json: @board_pins.errors.full_messages, status: 422
    end
  end

  def destroy 
    @board_pins = current_user.boards_pins.find(params[:id])
    if @board_pins 
      @board_pins.destroy
      render "/api/boards_pins/show"
    else 
      render json: @board_pins.errors.full_messages, status: 401
    end
  end

  private
  def boards_pin_params
    params.require(:boards_pin).permit(:board_id, :pin_id)
  end
end
