import {TopLevelCategory} from '../../interfaces/page.interface'
import {MenuItem} from '../../interfaces/menu.interface'
import {ProductModel} from '../../interfaces/product.interface'

export interface TopPageProps {
    firstCategory: TopLevelCategory
    menu: MenuItem[]
    products: ProductModel[]
}
