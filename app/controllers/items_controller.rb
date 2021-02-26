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
		item = @department.items.create(item_params)

		redirect_to department_path(@department)
	end


	def edit
		render component: "ItemForm", props: {department: @department, item: @item}
	end


	def update
		@item.update(item_params)

		redirect_to department_path(@department)
	end


	def destroy
		@item.destroy

		redirect_to department_path(@department)
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
