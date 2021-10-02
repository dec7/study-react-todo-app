import React, { StrictMode } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import App from 'components/App'
import 'styles/index.css'
import 'styles/color.scss'

const Root = (): JSX.Element => {
    return (
        <StrictMode>
            <RecoilRoot>
                <Router>
                    <App />
                </Router>
            </RecoilRoot>
        </StrictMode>
    )
}

export default Root