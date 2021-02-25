import React from "react";

const Departments = (props) => {
  const {departments} = props

  const renderDeps = () => {
    return departments.map(department => {
      return(
        <div className="dep-container">
          <h2>{department.name}</h2>
					<a href={`/departments/${department.id}`}>show</a>
        </div>
		
      )
      
    })
  }
  return(
    <div className="viewport-container">
      <h1 className="header"> Jon Depot</h1>
      <div className="deps-container">
        {renderDeps()}
      </div>
    </div>
    
  )
};


export default Departments;