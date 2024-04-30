"use client"

import ReactDOM from "react-dom"

export function PreloadResources() {
  ReactDOM.preload(
    "/bg_gradient_pfosr9.jpeg",
    { as: "image" },
  )

  return null
}
