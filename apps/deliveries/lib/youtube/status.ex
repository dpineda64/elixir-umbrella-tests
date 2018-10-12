defmodule Deliveries.Youtube.Status do
    # alias Deliveries.Youtube.Client, as: Client
    # @status_url "https://www.googleapis.com/youtube/partner/v1/assetSearch?type=sound_recording&ownershipRestriction=none"

    # def status_for(isrcs) when is_list(isrcs) do  
    #     case do_status_for(isrcs) do
    #     {:ok, response} ->
    #       case decode_response(response.body) do
    #         %{"error" => error_messages} ->
    #           {:error, decode_response(response.body)}
    #         _ ->
    #           {:ok, decode_response(response.body)}
    #       end
    #     {:error, response} ->
    #       {:error, decode_response(response.body)}
    #     end
    #   end
    
    # defp do_status_for(isrcs) do
    #     @status_url <> "&isrcs=" <> Enum.join(isrcs, "%2C%20")
    #     |> Client.make_request(:get)
    # end

    # defp decode_response(body) do
    #     {:ok, :body} = Poison.decode(body)
    #     body
    # end
end