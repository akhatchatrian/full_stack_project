class Api::BoxesController < ApplicationController

    def index
        @boxes = Box.all
        debugger
    end

    def create 
        @user = User.find_by(id: current_user.id) #just for testing, don't forget to change!!!
        @box = Box.create!(user_id: @user.id)

        @inventory = Inventory.all
        
        matching = []
        
        @inventory.each do |item|
            if (@user.style_values[0].price_range.to_f <= item.price &&
                # @user.style_values[0].colors.include?(item.color) &&
                # @user.style_values[0].brands.include?(item.brands) &&
                @user.style_values[0].size_shirt == item.size ||
                @user.style_values[0].size_pants == item.size ||
                @user.style_values[0].size_shoes == item.size)
                matching << item
            end    
        end
        
        final_picks = []
        total_cost = 0

        final_picks = matching[0..4]

        final_picks.each do |pick|
            total_cost += pick.price
            BoxItem.create!(user_id: @user.id, box_id: @box.id, inventory_id: pick.id)
        end
        debugger
        @box.update(total_cost: total_cost)
        render "/api/boxes/index"
    end

end
