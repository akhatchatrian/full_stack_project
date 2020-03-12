class Api::StyleValuesController < ApplicationController


    # before_action :require_login, only: [:create]

    def create
        @style_values = StyleValue.create!(style_value_params)

        if @style_values.save
        else
            render json: @style_values.errors.full_messages, status: 422
        end
    end

    def style_value_params
        params.require(:style_value).permit(
            :user_id, 
            :price_range, 
            :size_shirt, 
            :size_pants, 
            :size_shoes,
            :brands => [],
            :colors => []
        )
    end

end
