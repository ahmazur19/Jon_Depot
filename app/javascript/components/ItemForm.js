import React from "react";


const ItemForm = (props) => {
  const {department, item} = props
  const action = item ? `/departments/${department.id}/items/${item.id}` : `/departments/${department.id}/items`
  const defaultName = item ? item.name : ""
  const defaultPrice = item ? item.price : ""
  const defaultBrand = item ? item.brand : ""
  // const {name, price, brand} = props.item 

  return(
    <div>
      <h1>{item ? "Edit Tool" : "New Tool"}</h1>
      <form action={action} method="post">
        {item && <input type="hidden" name="_method" value="patch" />}
        <p>Name</p>
        <input defaultValue={defaultName} name="item[name]"/>
        <p>Price</p>
        <input defaultValue={defaultPrice} name="item[price]"/>
        <p>Brand</p>
        <input defaultValue={defaultBrand} name="item[brand]"/>
        <button>{item ? "Edit" : "Create"}</button>
      </form>
    </div>
  )
}


export default ItemForm;