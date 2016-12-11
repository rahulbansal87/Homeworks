class UserMailer < ApplicationMailer
  default from: 'no-reply@example.com'

  def activation_email(user)
    @user = user
    mail(to: @user.username, subject: "Welcome to 99 Cats! Please activate your email!")
  end
end
