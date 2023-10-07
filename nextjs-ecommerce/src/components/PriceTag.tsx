import { formatPrice } from "@/app/lib/format"
interface PricetagProps {
    price: number,
    className?: string
}

export default function PriceTag({price, className} : PricetagProps) {
    return <span className={`badge`}>{formatPrice(price)}</span>;
}