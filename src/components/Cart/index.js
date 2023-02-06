import { useState } from "react"
import PropertyTypes from "prop-types"
export const Cart = (props) => {
  const [show, setShow] = useState(false)
  if (show === false) {
    return (
      <button
        onClick={() => setShow(true)}
        className="btn btn-sm btn-secondary mb-1"
      >
        Show Cart
      </button>
    )
  } else {
    return (
      <>
        <button
          onClick={() => setShow(false)}
          className="btn btn-sm btn-secondary mb-1"
        >
          Hide Cart
        </button>
        <h2 key={Date.now()}>Cart Total: {props.total}AMD</h2>
        <table className="table table-dark table-bordered table-sm">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.items.map((elm) => {
              return (
                <tr
                  className={
                    elm.quantity >= 5
                      ? (elm.className = "high")
                      : (elm.className = "")
                  }
                  key={elm.id}
                >
                  <td>{elm.name}</td>
                  <td>{elm.price}AMD</td>
                  <td>{elm.quantity}</td>
                  <td>{elm.quantity * elm.price}AMD</td>
                  <td>
                    <button
                      onClick={() => props.onQuantityDown(elm)}
                      className="btn btn-success btn-sm"
                    >
                      Quantity down
                    </button>
                    <button
                      onClick={() => props.onRemoveItem(elm)}
                      className="btn btn-success btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </>
    )
  }
}

Cart.defaultProps = {
  show: false,
}
Cart.propTypes = {
  show: PropertyTypes.bool,
}
