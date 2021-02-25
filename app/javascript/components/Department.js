import React from "react";

const Department = (props) => {
  const {department, items} = props
  const {name, id} = department

  const renderDep = () => {
    return items.map(item => {
      return(
        <div className="dep-container">
          <h2>{item.name}</h2>
          <h3>${item.price}.00</h3>
          <h3>Made by {item.brand}</h3>
					<a href= {`/departments/${id}/items/${item.id}`}>View Tool</a>
        </div>

      )
      
    })
  }

	return (
		<div>
			<h1 className="header"> Jon Depot</h1>
			<h1 className="dep-header">{name}</h1>
      <div className= "deps-container">{renderDep()}</div>
			<a href="/">Go Back</a>
		</div>
	)
}

export default Department