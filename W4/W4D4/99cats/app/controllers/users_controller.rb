class UsersController < ApplicationController
  before_action :require_no_user!

  def create
    @user = User.new(user_params)
    if @user.save
      UserMailer.activation_email(@user).deliver!
      flash.now[:errors] = ["One more step! Please activate your email!"]

      redirect_to cats_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def new
    @user = User.new
    render :new
  end

  def activate
    @user = User.find_by_activation_token(params[:activation_token])
    @user.activate!
    login_user!(@user)
    flash.now[:errors] = ["Successfully activated! Enjoy the website!"]
    redirect_to cats_url
  end

  private

  def user_params
    params.require(:user).permit(:password, :username)
  end
end
