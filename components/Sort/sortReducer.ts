import {SortEnum} from './Sort.props'
import {ProductModel} from '../../interfaces/product.interface'

export type SortReducerActions =
    { type: SortEnum.Rating } |
    { type: SortEnum.Price } |
    {type: 'RESET', payload: {products: ProductModel[], sort: SortEnum}}

export type SortReducerState = {
    sort: SortEnum,
    products: ProductModel[]
}

export const sortReducer = (state: SortReducerState, action: SortReducerActions): SortReducerState => {
    const {type} = action
    switch (type) {
        case SortEnum.Price:
            return {
                sort: SortEnum.Price,
                products: state.products
                    .sort((a, b) => b.price - a.price)
            }
        case SortEnum.Rating:
            return {
                sort: SortEnum.Rating,
                products: state.products
                    .sort((a, b) => b.initialRating - a.initialRating)
            }
        case 'RESET':
            return {
                sort: action.payload.sort,
                products: action.payload.products
            }
        default:
            throw new Error('Invalid sorting type!')
    }
}
