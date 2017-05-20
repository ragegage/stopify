require 'test_helper'

class AlbumsControllerControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get albums_controller_index_url
    assert_response :success
  end

  test "should get show" do
    get albums_controller_show_url
    assert_response :success
  end

end
