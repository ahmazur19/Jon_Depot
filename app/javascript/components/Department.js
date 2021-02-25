import React from "react";

const Department = (props) => {
  const {department, items} = props
  const {name, id} = department

  const renderDep = () => {
    return items.map(item => {
      return(
        <div>
          <h2>{item.name}</h2>
          <h3>${item.price}.00</h3>
          <h3>Made by {item.brand}</h3>
        </div>

      )
      
    })
  }



	return (
		<div>
			<h1>{name}</h1>
      <h1>{id}</h1>
      <a href="/">Go Back</a>
      {renderDep()}
		</div>
	)
}

export default Department