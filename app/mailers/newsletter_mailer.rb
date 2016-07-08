class NewsletterMailer < ActionMailer::Base

  Gko::Core::MailSettings.init

  def confirmation(inquiry)
    @inquiry = inquiry
    mail(:to => inquiry.email,
         :from => "\"#{inquiry.site.title}\" <#{inquiry.receiver || inquiry.site.inquiry_recipients || inquiry.site.preferred_contact_email}>",
         :subject => t(:'inquiry_mailer.confirmation.subject'),
         :reply_to => inquiry.receiver || inquiry.site.preferred_contact_email)
  end

  def notification(inquiry)
    @inquiry = inquiry
    mail(:to => inquiry.receiver || inquiry.site.inquiry_recipients || inquiry.site.preferred_contact_email,
         :from => "\"#{inquiry.site.title}\" <#{inquiry.email}>",
         :subject => t(:'inquiry_mailer.notification.subject'),
         :reply_to => inquiry.email)
  end

end
