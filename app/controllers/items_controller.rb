class ItemsController < ApplicationController

	before_action :get_department
	before_action :get_item, only: [:show, :update, :edit, :destroy]


	def show
		@department = Department.find (params[:department_id])

		@item = @department.items.find (params[:id])

		render component: "Item", props: {item: @item, department: @department}
	end
	

	def new
		render component: "ItemForm", props: {department: @department}
	end


	def create
		item = @departments.items.new(item_params)

		redirect_to department_items_path(@departments)
	end


	def edit
		render component: "ItemForm", props: {department: @department, item: @item}
	end


	def update
	end


	def destroy
	end


	private

	def get_department
		@department = Department.find(params[:department_id])
	end

	def get_item
		@item = @department.items.find(params[:id])
	end

	def item_params
		params.require(:item).permit(:name, :price, :brand)
	end
end
