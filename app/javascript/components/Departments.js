import React from "react";

const Departments = (props) => {
  const {departments} = props

  const renderDeps = () => {
    return departments.map(department => {
      return(
        <div>
          <h2>{department.name}</h2>
        </div>
      )
      
    })
  }
  return(
    <div>
      <h1>Departments Page</h1>
      <div>
        {renderDeps()}
      </div>
    </div>
    
  )
};


export default Departments;