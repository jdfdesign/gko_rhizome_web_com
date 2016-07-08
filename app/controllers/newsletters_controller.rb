# app/controllers/newsletters.rb
class NewslettersController < BaseController

  respond_to :js

  def create
    begin
      @newsletter_form = NewsletterForm.new(params[:newsletter])
      @newsletter_form.request = request
      if @newsletter_form.deliver
        flash.now[:notice] = 'Thank you for your message!'
        render :text => "OK"
      else
        render :text => "ERROR"
      end
    rescue ScriptError
      flash[:error] = 'Sorry, this message appears to be spam and was not delivered.'
    end
  end

end
