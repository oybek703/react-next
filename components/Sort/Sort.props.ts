import {DetailedHTMLProps, HTMLAttributes} from 'react'

export interface SortProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    sort: SortEnum
    setSort: (sort: SortEnum) => void
}

export const enum SortEnum {
    Rating,
    Price
}
