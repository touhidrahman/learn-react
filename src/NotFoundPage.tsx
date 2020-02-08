import * as React from 'react'

interface INotFoundPageProps {}

const NotFoundPage: React.FunctionComponent<INotFoundPageProps> = (props) => {
    return (
        <div>
            <h1>404: Page not found!</h1>
        </div>
    )
}

export default NotFoundPage
