class SessionsController < ApplicationController
# login
  def create
    @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password])
    if @user.nil?
      render json: ['Invalid email or password'], status: 401 
    else   
      login(@user)
      render `api/users/show`;
  end

  # logout
  def destroy 
    @user = current_user 
    if @user
      logout 
      render `api/users/show`
    else  
      render json: ["Not current user"], status: 404
    end
  end
end
