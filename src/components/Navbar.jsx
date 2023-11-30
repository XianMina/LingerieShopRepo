export const Navbar = () => {
    return (
        <header>
            <nav className="h-20 bg-thistle
            flex items-center justify-evenly">
                <h1 className="uppercase text-rebecca_purple text-4xl font-medium font-rozha_one">Youth</h1>
                <ul className="uppercase flex gap-10">
                    <li className="hover:text-rebecca_purple"><a href="">Home</a></li>
                    <li className="hover:text-rebecca_purple"><a href="">About</a></li>
                    <li className="hover:text-rebecca_purple"><a href="">Products</a></li>
                    <li className="hover:text-rebecca_purple"><a href="">Contacts</a></li>
                </ul>
            </nav>
        </header>
    )
}
