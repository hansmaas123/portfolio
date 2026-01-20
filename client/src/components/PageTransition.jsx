import PropTypes from 'prop-types'
import { useEffect } from 'react'

const PageTransition = ({ children }) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return <>{children}</>
}

PageTransition.propTypes = {
    children: PropTypes.node.isRequired
}

export default PageTransition
