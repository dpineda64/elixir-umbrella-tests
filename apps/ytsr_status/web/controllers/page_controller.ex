defmodule YtsrStatus.PageController do
  use YtsrStatus.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
