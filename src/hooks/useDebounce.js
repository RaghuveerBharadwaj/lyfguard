import { useEffect } from "react"

export const useDebouncedEffect = (effect, deps = [], delay = 350) => {
  useEffect(() => {
    const handler = setTimeout(() => { effect() }, delay)

    return () => clearTimeout(handler)
  }, [...deps, delay])
}