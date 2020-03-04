class Api::StyleProfileValuesController < ApplicationController

    def update
        @style_value = StyleProfileValue.find(params[:id])

        if @style_value.update(style_value_params)
        else
            render json: @style_value.errors.full_messages, status: 422
        end
    end

    def style_value_params
        permit(:style_profile_value).require(:profile_item_id, :value)
    end

end
