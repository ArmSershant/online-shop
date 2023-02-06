import { useState } from "react"
export const Products = (props) => {
  const [style, setStyle] = useState("col-md-4 my-2")
  const filterRowByThree = () => {
    setStyle("col-md-4 my-2")
  }
  const filterRowByFour = () => {
    setStyle("col-md-3 my-2")
  }
  return (
    <>
      <div className="row">
        <div className="d-flex gap-1">
          <button
            className="btn btn-outline-dark btn-sm"
            onClick={() => filterRowByFour()}
          >
            Colums: 4
          </button>
          <button
            className="btn btn-outline-dark btn-sm"
            onClick={() => filterRowByThree()}
          >
            Colums: 3
          </button>
        </div>
        {props.items.map((elm) => {
          return (
            <div key={elm.id} className={style}>
              <img alt="" src={elm.photo}></img>
              <h4>{elm.name}</h4>
              <p className="text">
                <mark>{elm.price}AMD</mark>
              </p>
              <button
                onClick={() => props.onMoveToCart(elm)}
                className="btn btn-success btn-sm"
              >
                Move to Cart
              </button>
            </div>
          )
        })}
      </div>
    </>
  )
}
