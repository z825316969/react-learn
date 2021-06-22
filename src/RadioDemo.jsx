import React from 'react'

export default function App() {
  const [count, setCount] = React.useState(0)

  function addOne() {
    setCount(count + 1)
    setCount(count + 1)
  }

  return (
    <div>
      <h1>Count: {count}</h1> {/* 1 (as we expect) */}
      <button onClick={addOne}>+ 1</button>
    </div>
  )
}
