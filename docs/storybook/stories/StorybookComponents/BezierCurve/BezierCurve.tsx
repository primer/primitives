import React, {useRef, useEffect} from 'react'

export const CubicBezier = ({bezier}: {bezier: [number, number, number, number]}) => {
  const canvasRef = useRef(null)
  const padding = 20
  const lineWidth = '6'
  const fillStart = 'purple'
  const fillEnd = 'blue'

  // Convert CSS cubic-bezier array to control points
  const [x1, y1, x2, y2] = bezier
  const p0 = {x: padding, y: 500 - padding}
  const p1 = {
    x: x1 * (500 - 2 * padding) + padding,
    y: 500 - (y1 * (500 - 2 * padding) + padding),
  }
  const p2 = {
    x: x2 * (500 - 2 * padding) + padding,
    y: 500 - (y2 * (500 - 2 * padding) + padding),
  }
  const p3 = {x: 500 - padding, y: padding}

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Create gradient
    const gradient = ctx.createLinearGradient(p0.x, p0.y, p3.x, p3.y)
    gradient.addColorStop(0, fillStart)
    gradient.addColorStop(1, fillEnd)

    // Draw bezier curve
    ctx.strokeStyle = gradient
    ctx.lineWidth = lineWidth
    ctx.lineCap = 'round'
    ctx.beginPath()
    ctx.moveTo(p0.x, p0.y)
    ctx.bezierCurveTo(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y)
    ctx.stroke()
  }, [p0, p1, p2, p3])

  return <canvas ref={canvasRef} width={500} height={500} />
}
