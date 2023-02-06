import { useState } from "react"

export const DropDown = (props) => {
  const [show, setShow] = useState(false)

  return (
    <div className="drop">
      <input onFocus={() => setShow(true)} type="text" />
      {show && (
        <div className="list">
          {props.items.map((elm, i) => {
            return (
              <div
                onClick={() => {
                  props.onFilter(elm)
                  setShow(false)
                }}
                key={i}
              >
                {elm}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
