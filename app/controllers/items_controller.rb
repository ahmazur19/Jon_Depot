class ItemsController < ApplicationController
	def show
		@department = Department.find (params[:department_id])

		@item = @department.items.find (params[:id])

		render component: "Item", props: {item: @item, department: @department}
	end
	

	def new
		render component: "ItemForm"
	end


	def create
	end


	def edit
		render component: "ItemForm"
	end


	def update
	end


	def destroy
	end


end
