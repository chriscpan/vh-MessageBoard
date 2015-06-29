require 'rails_helper'

feature 'Posts Index' do

  it 'renders the Post Index template into $rootEl', js: true do
    visit '#'
    expect(page).to have_content('work??')
  end

  it 'renders the root html', js: true do
    visit '#'
    expect(page).to have_content('Viralheat')
  end
end

feature 'Posts New' do

  it 'renders the Post New template into $rootEl', js: true do
    visit "#/posts/new"
    expect(page).to have_content('Submit a Posting')
  end

end

feature 'Posts show' do

  it 'renders the Post Show template into $rootEl', js: true do
    visit "#/posts/1"
    expect(page).to have_content('Posted')
  end

end

feature 'Post Edit' do

  it 'renders the Post Edit template into $rootEl', js: true do
    visit "#/posts/1/edit"
    expect(page).to have_content('Editing a Posting')
  end

end
