export function ItemLink({ children, url }: LinkProps) {
    return (
        <a href={url} className='hover:text-primary'>{children}</a>
    )
}
