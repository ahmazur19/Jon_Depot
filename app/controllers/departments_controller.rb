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
	render component: "DepartmentNew",
end

def create
end

def edit
end

def update
end

def destroy
end


end
