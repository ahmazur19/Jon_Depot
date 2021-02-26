import React from "react";

const Departments = (props) => {
  const {departments} = props

  const renderDeps = () => {
    return departments.map(department => {
      return(
        <div className="dep-container">
          <h2>{department.name}</h2>
					<a href={`/departments/${department.id}`}>Tools</a>
					<a href={`/departments/${department.id}/edit`}>Edit Department</a>
          <a href={`/departments/${department.id}`} data-method="delete">Delete Department</a>
        </div>
		
      )
      
    })
	}
  return(
    <div className="viewport-container">
      <h1 className="header"> Jon Depot</h1>
			<a href= {`/departments/new`}>Create New Department</a>
      <div className="deps-container">
        {renderDeps()}
      </div>
    </div>
    
  )
};


export default Departments;