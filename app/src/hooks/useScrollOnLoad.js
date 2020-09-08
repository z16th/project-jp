import { useEffect } from "react"

export default function useScrollOnLoad() {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
}
