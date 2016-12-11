class ApplicationMailer < ActionMailer::Base
  # include Rails.application.routes.url_helpers
  # include ActionView::Helpers::UrlHelper
  default from: "from@example.com"
  layout 'mailer'
end
