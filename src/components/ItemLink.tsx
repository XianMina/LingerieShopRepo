export function ItemLink({ children, url }: LinkProps) {
    return (
        <a href={url} className='hover:text-violet'>{children}</a>
    )
}
