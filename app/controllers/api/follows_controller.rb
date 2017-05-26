class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.new(follow_params)
    if @follow.save
      render :show
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.find_by(follow_params[:follower_id],
                            follow_params[:following_id])
    if @follow.destroy
      render :show
    else
      render json: ["Failed to delete"], status: 422
    end
  end

  private

  def follow_params
    params.require(:follow).permit(:follower_id, :following_id)
  end
end
