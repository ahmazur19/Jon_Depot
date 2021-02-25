import React from "react"


const DepartmentForm = (props) => {
const {department} = props
const defaultName = department.name ? department.name : ""
const action = department.id ? `/departments/${department.id}` : "/departments/"
  return(
		<div>
		<h1>{department.id ? "Edit Form" : "New Form"}</h1>
		<form action={action} method="post">
		{department.id && <input type="hidden" name="_method" value="patch" />}
			<input defaultValue={defaultName} name="department[name]"/>
			<button>{department.id ? "Edit" : "Add"}</button>
		</form>
	</div>
  )
}


export default DepartmentForm;