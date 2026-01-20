import { useState } from "react"
import NavBar from "../components/NavBar"
import Cursor from "../components/Cursor"
import PageTransition from "../components/PageTransition"
import { TransitionProvider } from "../contexts/TransitionContext"

const ErrorPage = () => {
    const [scaling, setScaling] = useState(false)

    return (
        <TransitionProvider>
            <Cursor scaling={scaling} />
            <PageTransition>
                <div className="error__container">
                <NavBar />
                <div className="error__wrapper">
                    <h1 className="error__title">404</h1>
                    <p className="error__description">This page does not exist</p>
                    <p className="error__description2">Maybe you typed the wrong url or used an outdated link. Try to navigate back to the homepage.</p>
                </div>
                </div>
            </PageTransition>
        </TransitionProvider>
    )
}

export default ErrorPage;