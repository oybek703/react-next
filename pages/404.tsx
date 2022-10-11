import {HTag} from '../components'
import {withLayout} from '../layout'

export function NotFound(): JSX.Element {
    return (
        <>
            <HTag tag="h3">Ошибка 404</HTag>
        </>
    )
}

export default withLayout(NotFound)
