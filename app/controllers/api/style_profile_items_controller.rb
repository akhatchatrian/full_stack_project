class Api::StyleProfileItemsController < ApplicationController

    def index 
        @style_items = StyleProfileItem.all
    end

end
