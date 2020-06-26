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
    
  end
end
