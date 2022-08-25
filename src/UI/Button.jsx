import React from "react"

const Button = ({ styles, text }) => {
  return (
    <button
      type="button"
      className={`${styles} py-4 px-6 text-[18px] text-primary outline-none font-poppins font-medium bg-blue-gradient rounded-[10px]`}
    >
      {text}
    </button>
  )
}

export default Button
