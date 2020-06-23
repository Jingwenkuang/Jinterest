class Api::UsersController < ApplicationController

  def index 
    @users = User.all 
    render "api/users/index"
  end

  def show 
    @user = User.find_by(id: params[:id])
    render "api/users/show"
  end


  def create 
    @user = User.new(user_params)
    
    if @user.save 
      login(@user)
      render "api/users/show"
    else  
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update 
    @user = current_user 
    if @user.update(user_params)
      render "api/users/show"
    else  
      render json: @user.errors.full_messages, status: 422 
    end
  end


  private 
  def user_params 
    params.require(:user).permit(:username, :fist_name, :last_name, :location, :description, :email, :password)
  end 

end
