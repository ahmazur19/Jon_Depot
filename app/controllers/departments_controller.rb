class DepartmentsController < ApplicationController

def index
  @departments = Department.all

  render component: "Departments", props: {departments: @departments}
end

def show
  @department = Department.find(params[:id])
  
  @items = @department.items

	render component: "Department", props: {department: @department, items: @items}
end

def new
	# @department = Department.new

	# render component: "DepartmentForm", props: {department: @department, items: @items}
end

def create
	# Department.create(name: params[:department][:name])

	# redirect_to root_path
end

def edit
	@department = Department.find(params[:id])

	render component: "DepartmentForm", props: {department: @department}


end

def update
	Department.update(name: params[:department][:name])
	# @department.update(name: params[:department][:name])
	# redirect_to root_path
end

def destroy
end


end
