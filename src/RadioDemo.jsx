import React, { useState } from 'react'
import { Radio } from 'antd'

export default function App() {
  const [test, setTest] = useState(null)
  let [num, setNum] = useState(0)

  function log() {
    // setNum(num + 1)
    console.log('num :>> ', num)
  }

  return (
    <>
      <button onClick={log}>add</button>
      {/* <p>{num}</p> */}
      <Radio.Group name="radiogroup" defaultValue={1}>
        <Radio onClick={() => setNum(2)} value={0}>
          A
        </Radio>
        <Radio onClick={() => test.log()} value={2}>
          B
        </Radio>
        <Radio
          onClick={() =>
            setTest(data => ({
              num: 2,
              log,
            }))
          }
          value={3}
        >
          C
        </Radio>
        <Radio value={4}>D</Radio>
      </Radio.Group>
    </>
  )
}
