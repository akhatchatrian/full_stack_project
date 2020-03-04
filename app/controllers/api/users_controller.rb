class Api::UsersController < ApplicationController

    before_action :require_login, only: [:update, :show, :destroy]

    def create
        @user = User.new(user_params)

        if @user.save
            render "api/users/show"
        else  
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = User.find(params[:id])

        if @user.update(user_params)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.find(params[:id])
        render "api/users/show"
    end

    def user_params
        params.require(:user).permit(:email, :first_name, :last_name, :gender, :sub_plan, :password)
    end

end


# NEED TO FIGURE OUR ERRORS 