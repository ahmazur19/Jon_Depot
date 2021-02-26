import React from "react"


const DepartmentForm = (props) => {
const {department} = props
const defaultName = department.name ? department.name : ""
const action = department.id ? `/departments/${department.id}` : "/departments/"
  return(
		<div className = "form-page">
			<div>
				<h1 className="header">Jon Depot</h1>
			</div>
			<div className = "form-container">
				<h1 className = "form-header">{department ? "🚧 Edit Tool 🚧" : "🛠️ New Tool 🛠"}</h1>
				<form action={action} method="post">
					{department.id && <input type="hidden" name="_method" value="patch" />}
					<div className = "form-contents">
						<input defaultValue={defaultName} name="department[name]"/>
					</div>
					<button>{department ? "Edit 🟢" : "Create 🟢"}</button>
					<a href={`/departments/${department.id}`}>Cancel</a>
				</form>
			</div>
		</div>
  )
}


export default DepartmentForm;