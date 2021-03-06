import React, { useState, useEffect, createRef, useRef } from 'react'
// import FormDemo from './FormDemo'
import FunctionComponent from '@/FunctionComponent'
import ClassComponent from './ClassComponent'

export default function HookRefs(props) {
  const myRef = createRef()
  const hookRef = useRef(null)

  function handleConsole() {
    console.log('hookRef :>> ', hookRef)
  }

  return (
    <div>
      <button onClick={handleConsole}>13213</button>
      {/* <FormDemo ref={ myRef }/> */}
      <FunctionComponent title="啦啦" ref={myRef} />
      {/* <FunctionComponent title='123啦啦' ref={ hookRef }/> */}
    </div>
  )
}
