import React from "react";


const ItemForm = (props) => {
  const {department, item} = props
  const action = item ? `/departments/${department.id}/item/${item.id}` : `/departments/${department.id}/items`
  const defaultName = item ? item.name : ""
  const defaultPrice = item ? item.price : ""
  const defaultBrand = item ? item.brand : ""
  // const {name, price, brand} = props.item 

  return(
    <div>
      <h1>{item ? "Edit Form" : "New Form"}</h1>
      <form action={action} method="post">
        {item && <input type="hidden" name="_method" value="patch" />}
        <p>Name</p>
        <input defaultValue={defaultName}/>
        <p>Price</p>
        <input defaultValue={defaultPrice}/>
        <p>Brand</p>
        <input defaultValue={defaultBrand}/>
        <button type="submit">{item ? "Edit" : "Create"}</button>
      </form>
    </div>
  )
}


export default ItemForm;