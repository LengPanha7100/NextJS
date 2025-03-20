import React from "react"
export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center text-center content-center ml-96">
      <h2 className="text-3xl font-bold text-red-400">Not Found</h2>
      <p className="font-mono text-xl mt-3">Could not find requested resource</p>
    </div>
  )
}