class Api::BoardsController < ApplicationController

  before_action :require_login 

  def index 
    @boards = Board.all.includes(:pins)
    # @boards = Board.all
    render '/api/boards/index'
  end

  # def show 
  #   # @board = Board.find_by(id: params[:id])
  #   @board = Board.find_by(id: params[:board][:id])
   
  #   if @board 
  #     render "/api/boards/show"
  #   else
  #     render json: @board.errors.full_messages, status: 422 
  #   end
  # end
    def show
    # @board = Board.includes(:pins).find(params[:id])
    @board = Board.find_by(id: params[:id])
   
    render "api/boards/show"
    end

  def create 
    @board = Board.new(board_params)
    @board.user_id = current_user.id 
    if @board.save 
      render "/api/boards/show"
    else
      render json: @board.errors.full_messages, status: 422 
    end
  end

  def update 
    @board = Board.find_by(id: params[:id])
    if @board && @board.user_id == current_user.id 
      if @board.update(board_params)
        render "/api/boards/show"
      else 
        render json: @board.errors.full_messages, status: 422 
      end 
    else
      render json: @board.errors.full_messages, status: 422 
    end
  end

  def destroy 
    @board = Board.find_by(id: params[:id])
    if @board && @board.user_id == current_user.id 
      if @board.destroy
        render json: @board.id 
      else
        render json: @board.errors.full_messages, status: 422 
      end
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  private 
  def board_params
    params.require(:board).permit(:user_id, :name, :description, :secret, :date_start, :date_end)
  end
end
