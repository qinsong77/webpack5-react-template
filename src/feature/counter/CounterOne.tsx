import { useEffect, useState } from 'react'

export function CounterOne() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  useEffect(() => {
    console.log('one')
    const id = setInterval(() => {
      setCount((c) => c + step)
    }, 1000)
    return () => clearInterval(id)
  }, [step])

  return (
    <>
      <h1>counter: {count}</h1>
      <label
        htmlFor="step"
        className="text-input-label"
      >
        Step
      </label>
      <input
        id="step"
        className="text-input"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
    </>
  )
}
