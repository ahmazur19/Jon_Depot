class DepartmentsController < ApplicationController

def index
  @departments = Department.all

  render component: "Departments", props: {departments: @departments}
end

def show
	render component: "Department"
end

def new
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
