# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_04_225530) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "box_items", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "box_id", null: false
    t.integer "inventory_id", null: false
    t.boolean "purchased"
    t.text "feedback"
    t.index ["box_id"], name: "index_box_items_on_box_id"
    t.index ["inventory_id"], name: "index_box_items_on_inventory_id"
    t.index ["user_id"], name: "index_box_items_on_user_id"
  end

  create_table "boxes", force: :cascade do |t|
    t.integer "user_id", null: false
    t.float "total_cost", null: false
    t.float "purchase_cost", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_boxes_on_user_id"
  end

  create_table "inventories", force: :cascade do |t|
    t.string "type", null: false
    t.string "brand", null: false
    t.float "price", null: false
    t.string "color", null: false
    t.string "size", null: false
    t.string "gender", null: false
    t.integer "quantity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "style_profile_items", force: :cascade do |t|
    t.string "gender", null: false
    t.string "category", null: false
    t.string "category_item", null: false
  end

  create_table "style_profile_values", force: :cascade do |t|
    t.integer "user_id"
    t.integer "profile_item_id", null: false
    t.string "value"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["profile_item_id"], name: "index_style_profile_values_on_profile_item_id"
    t.index ["user_id"], name: "index_style_profile_values_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "gender"
    t.string "sub_plan"
    t.string "session_token", null: false
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
