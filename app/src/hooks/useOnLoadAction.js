import { useEffect } from "react"

export default function useOnLoadAction(fn) {
  useEffect(() => {
    fn()
  }, [])
}
