class ItemsController < ApplicationController
	def show
		@department = Department.find (params[:department_id])

		@item = @department.items.find (params[:id])

		render component: "Item", props: {item: @item, department: @department}
	end
	
end
