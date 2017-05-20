require 'test_helper'

class ArtistsControllerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get artists_controller_index_url
    assert_response :success
  end

  test "should get show" do
    get artists_controller_show_url
    assert_response :success
  end

end
