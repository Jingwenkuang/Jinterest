class Api::PinsController < ApplicationController

  def index 
    @pins = Pin.all 
    render :index
  end

  def show 
    @pin = Pin.find_by(id: params[:id])
    render :show 
  end

  def create 
    @pin = Pin.new(pin_params)
    @pin.user_id = current_user.id 

    if @pin.save 
      render :show 
    else 
      render json: @pin.errors.full_messages, status: 422
    end  
  end

  def update 
    @pin = Pin.find_by(:id, params[:id])
    if @pin.user_id === current_user.id && @pin.update(pin_params)
      render "api/pins/show"
    else 
      render json: @pin.errors.full_messages, status: 422 
    end
  end

  def destroy 
    @pin = current_user.pins.find_by(id: params[:id])

    if @pin 
      @pin.destry 
      render "api/pins/show"
    else  
      render json: @pin.errors.full_messages, status: 422 
    end
  end

  private
  def pin_params 
    params.require(:pin).permit(:title, :description, :user_id)
  end

end
