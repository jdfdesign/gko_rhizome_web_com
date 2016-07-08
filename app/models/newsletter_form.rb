class NewsletterForm < MailForm::Base
  attributes :lastname, :validate => true
  attributes :firstname, :validate => true
  attributes :email

  validates :email, :presence => true, :email => true

  # Declare the e-mail headers. It accepts anything the mail method
  # in ActionMailer accepts.
  def headers
    {
      :subject => "Newsletter subscription from website",
      :to => Site.current.preferred_contact_email,
      :from => %("#{lastname}" <#{email}>)
    }
  end

end
