import {withLayout} from '../layout'

function Search(): JSX.Element {
    return (
        <>
            <label htmlFor="search">Search</label>
            <input type="text" id='search' placeholder='Search course...'/>
        </>
    )
}

export default withLayout(Search)


