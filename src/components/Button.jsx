import React from 'react'

export default function Button(props) {
    const {text} = props
  return (
    <button className="px-8 py-4 rounded-medium border-[2px] bg-slate-950 border-blue-400 border-solid border blueShadow duration-200">
    <p>{text}</p>
  </button>
    )
}
