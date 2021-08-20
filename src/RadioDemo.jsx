import React, { useCallback, useRef } from 'react'

export default function App() {
  const tempCount = useRef(0)

  const [count, setCount] = React.useState(0)

  function addOne() {
    setCount(count + 1)
    tempCount.current = count + 1
  }

  const handleConsoleCount = useCallback(() => {
    setTimeout(() => {
      console.log('count :>> ', count)
      console.log('tempCount :>> ', tempCount)
    }, 5000)
  }, [count])

  return (
    <div>
      {/* <h1>Count: {count}</h1>  */}
      <h1>tempCount: {tempCount.current}</h1>
      <button onClick={addOne}>+ 1</button>
      <button onClick={handleConsoleCount}>打印</button>
    </div>
  )
}
