class Api::PinningsController < ApplicationController
  def create
    @pinning = Pinning.new(pinning_params)
    if @pinning.save
    else
      render json: @pinning.errors.full_messages, status: 400
    end
  end

  def destroy
    @pinning = Pinning.find(params[:id])
    if @pinning.destroy
    else
      render json: @pinning.errors.full_messages, status: 422
    end
  end

  private

  def pinning_params
    params.require(:pinning).permit(:board_id, :pin_id)
  end
end
