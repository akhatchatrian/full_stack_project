class Api::StyleValuesController < ApplicationController


    before_action :require_login, only: [:create]

    def create
        @style_values = StyleValue.new(style_value_params)

        if @style_values.save
        else
            render json: @style_value.errors.full_messages, status: 422
        end
    end

    def style_value_params
        params.require(:style_value).permit(:user_id, :brands, :price_range, :colors, :size_shirt, :size_pants, :size_shoes)
    end

end
