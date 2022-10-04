import {withLayout} from '../layout'

function SearchPage(): JSX.Element {
    return (
        <>
            <label htmlFor="search">Search</label>
            <input type="text" id='search' placeholder='Search course...'/>
        </>
    )
}

export default withLayout(SearchPage)


