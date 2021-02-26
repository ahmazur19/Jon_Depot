import React from "react";


const ItemForm = (props) => {
  const {department, item} = props
  const action = item ? `/departments/${department.id}/items/${item.id}` : `/departments/${department.id}/items`
  const defaultName = item ? item.name : ""
  const defaultPrice = item ? item.price : ""
  const defaultBrand = item ? item.brand : ""
  // const {name, price, brand} = props.item 

  return(
    <div className ="form-page">
      <div>
        <h1 className="header">Jon Depot</h1>
      </div>
      <div className="form-container">
        <h1 className = "form-header">{item ? "🚧 Edit Tool 🚧" : "🛠️ New Tool 🛠"}</h1>
        <form action={action} method="post">
          {item && <input type="hidden" name="_method" value="patch" />}
          <div className = "form-contents">
            <p>Name</p>
            <input defaultValue={defaultName} name="item[name]"/>
            <p>Price</p>
            <input defaultValue={defaultPrice} name="item[price]"/>
            <p>Brand</p>
            <input defaultValue={defaultBrand} name="item[brand]"/>
          </div>
          <button>{item ? "Edit 🟢" : "Create 🟢"}</button>
          <a href={`/departments/${department.id}`}>Cancel</a>
        </form>
      </div>
    </div>
  )
}


export default ItemForm;