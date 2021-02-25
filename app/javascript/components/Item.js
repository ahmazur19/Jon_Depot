import React from 'react'

const Item = (props) => { 
	const {name, price, brand, department_id} = props.item

	return(
		<div>
			<h1 className="header"> Jon Depot</h1>
			<div>
				<h2>{name}</h2>
				<h2>${price}.00</h2>
				<h2>Made by: {brand}</h2>
			</div>
			<a href= "/">Home</a>
			<a href={`/departments/${department_id}`}>Go Back</a>
		</div>
	)

}

export default Item