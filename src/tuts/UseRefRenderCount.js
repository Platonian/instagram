import React, {useEffect, useRef, useState} from 'react'

const UseRef_RenderCount = () => {
  const [name, setName] = useState()
  const inputRef = useRef()
  const renderCount = useRef(0)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  })

  return (
    <>
      <h1>UseRef and Render Count</h1>
      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
      <div>Rendered {renderCount.current} times</div>
    </>
  )
}

export default UseRef_RenderCount
