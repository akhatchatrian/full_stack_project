class Api::StyleProfileValuesController < ApplicationController


    before_action :require_login, only: [:create]

    def create
        @style_values = StyleProfileValue.new(style_value_params)

        if @style_values.save
        else
            render json: @style_value.errors.full_messages, status: 422
        end
    end

    def style_value_params
        permit(:style_profile_value).require(:profile_item_id, :value)
    end

end
