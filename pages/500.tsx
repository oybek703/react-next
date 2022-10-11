import {HTag} from '../components'
import {withLayout} from '../layout'

export function ServerError500(): JSX.Element {
    return (
        <>
            <HTag tag="h3">Ошибка 500</HTag>
        </>
    )
}

export default withLayout(ServerError500)
