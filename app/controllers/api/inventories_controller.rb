class Api::InventoriesController < ApplicationController

    def index
        @inventory = Inventory.all
        render "api/inventories/index"
    end

end