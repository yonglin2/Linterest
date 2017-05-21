class Api::PinsController < ApplicationController
  def index
    @pins = Pin.all
    render :index
  end

  def create
    @pin = Pin.new(pin_params)

    if @pin.save
      render :show
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  def show
    @pin = Pin.find(params[:id])
    render :show
  end

  def update
  end

  def destroy
    # not sure if this should be here
  end

  private

  def pin_params
    params.require(:pin).permit(:name, :image_url, :description)
  end
end
