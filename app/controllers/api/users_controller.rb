class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @user.image_url = "http://res.cloudinary.com/dbmxr3ior/image/upload/c_scale,w_986/v1495645704/n16djmokxo8xoqrywb59.jpg"
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :image_url, :description)
  end
end
