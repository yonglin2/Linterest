class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
    params[:user][:username],
    params[:user][:password]
    )

    if @user
      login(@user)
      # create a new view to only render username/id instead of everything
      render "api/users/show"
    else
      render(
        json: ["Invalid Credentials"],
        status: 401
      )
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
    render(
      json: ["Please log in"],
      status: 404
    )
    end
  end
end
