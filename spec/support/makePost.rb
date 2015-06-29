module AuthFeaturesHelper
  def make_post(username)
    visit ('posts/new')
    fill_in "Name", with: username
    fill_in "Title", with: "Blah Blah"
    fill_in "Message", with: "works?"
    click_button "Submit"
  end
end
