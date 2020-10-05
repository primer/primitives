import React from 'react'
import primitives from '../../../dist/js'

export default function Home() {
  return (
    <div>
      <pre>{JSON.stringify(primitives, null, 2)}</pre>
    </div>
  )
}
