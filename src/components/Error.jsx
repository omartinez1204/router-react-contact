
import { useRouteError } from 'react-router-dom'

export const Error = () => {

    const error = useRouteError()

    return (
        <div id='error-page'>
            <h1>Error!</h1>
            <p>Sorry, a ocurrido un error.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}


