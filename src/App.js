import { useState, useEffect, useMemo } from "react"
import PropertyTypes from "prop-types"
import axios from "axios"
import { Cart } from "./components/Cart"
import { Products } from "./components/ProductList"
import { DropDown } from "./components/DropDown"
import "./App.css"

function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const handleFilter = (text) => {
    let url = "http://localhost:5000/products"
    url += text !== "all" ? "/" + text : ""
    axios.get(url).then((r) => {
      setProducts(r.data.products)
    })
  }

  const filterBy = (text) => {
    if (text === "desc") {
      setCart([
        ...cart.sort(
          (prod1, prod2) =>
            prod1.quantity * prod1.price - prod2.quantity * prod2.price
        ),
      ])
    }
    if (text === "asc") {
      setCart([
        ...cart.sort(
          (prod1, prod2) =>
            prod2.quantity * prod2.price - prod1.quantity * prod1.price
        ),
      ])
    }
  }

  useEffect(() => {
    axios.get("http://localhost:5000/products/").then((response) => {
      setProducts(response.data.products)
    })
  }, [])

  const all = () => {
    axios.get("http://localhost:5000/products/").then((response) => {
      setProducts(response.data.products)
    })
  }

  const clothes = () => {
    axios.get("http://localhost:5000/products/clothes").then((response) => {
      setProducts(response.data.products)
    })
  }

  const tech = () => {
    axios.get("http://localhost:5000/products/tech").then((response) => {
      setProducts(response.data.products)
    })
  }

  const books = () => {
    axios.get("http://localhost:5000/products/books").then((response) => {
      setProducts(response.data.products)
    })
  }

  const moveToCart = (prod) => {
    let obj = cart.find((x) => x.id === prod.id)
    if (obj) {
      obj.quantity++
      setCart([...cart])
    } else {
      setCart([{ ...prod, quantity: 1 }, ...cart])
    }
  }

  const quantityDown = (prod) => {
    let obj = cart.find((x) => x.id === prod.id)
    if (obj) {
      obj.quantity--
      setCart([...cart])
    } else {
      setCart([{ ...prod, quantity: 0 }, ...cart])
    }
    if (obj.quantity < 1) {
      obj.quantity = 1
    }
  }

  const removeItem = (prod) => {
    cart.splice(cart.indexOf(prod), 1)
    setCart([...cart])
  }

  const currentTotal = useMemo(
    () =>
      cart.length === 0
        ? 0
        : cart.reduce((a, b) => a + b.price * b.quantity, 0),
    [cart]
  )

  return (
    <div className="container">
      <h1 className="display-1">Online Shop</h1>
      <DropDown
        items={["all", "clothes", "tech", "books"]}
        onFilter={handleFilter}
      />
      <div className="row">
        <div className="d-flex">
          <h2 onClick={() => all()} className="btn btn-m p-2 bd-highlight">
            All
          </h2>
          <h2 onClick={() => clothes()} className="btn btn-m p-2 bd-highlight">
            Clothes
          </h2>
          <h2 onClick={() => tech()} className="btn btn-m p-2 bd-highlight">
            Tech
          </h2>
          <h2 onClick={() => books()} className="btn btn-m p-2 bd-highlight">
            Books
          </h2>
        </div>
        <div className="col-md-7">
          <h2>Products</h2>
          <Products items={products} onMoveToCart={moveToCart} />
        </div>
        <div className="col-md-5">
          <DropDown items={["asc", "desc"]} onFilter={filterBy} />
          <Cart
            items={cart}
            total={currentTotal}
            onQuantityDown={quantityDown}
            onRemoveItem={removeItem}
          />
        </div>
      </div>
    </div>
  )
}

App.defaultProps = {
  total: 0,
  cart: [],
  products: [],
}
App.propTypes = {
  total: PropertyTypes.number,
  cart: PropertyTypes.array,
  products: PropertyTypes.array,
}

export default App

