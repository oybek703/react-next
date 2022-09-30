import {DetailedHTMLProps, HTMLAttributes} from 'react'

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    editable?: boolean,
    rating: number
    setRating?: (rating: number) => void
}
