

interface BannerItem {
    text: string
}

export interface BannerProps {
    items: BannerItem[]
}

export const Banner = ({items}: BannerProps) => {
    return (<p> {items.map((item) => item.text)} </p>)
}