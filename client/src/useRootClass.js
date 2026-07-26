import { useEffect } from 'react'

// Keeps page-scoped overrides on <html> (scrollbar gutter, scroll locking) tied to
// the lifetime of the page that wants them, so leaving the route restores the
// defaults the scrolling pages rely on.
export const useRootClass = (classNames) => {
    useEffect(() => {
        const list = classNames.split(' ').filter(Boolean)
        const root = document.documentElement
        root.classList.add(...list)
        return () => root.classList.remove(...list)
    }, [classNames])
}
