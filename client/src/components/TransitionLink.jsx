import { Link, useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useTransition } from '../contexts/TransitionContext'

const TransitionLink = ({ to, children, onClick, ...props }) => {
    const navigate = useNavigate()
    const { startTransition, endTransition } = useTransition()

    const handleClick = async (e) => {
        e.preventDefault()
        
        if (onClick) {
            onClick(e)
        }

        // Start transition animation
        await startTransition()
        
        // Navigate to new page
        navigate(to)
        window.scrollTo(0, 0)
        
        // End transition animation
        endTransition()
    }

    return (
        <Link to={to} onClick={handleClick} {...props}>
            {children}
        </Link>
    )
}

TransitionLink.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func
}

export default TransitionLink
