import Link from "next/link"
export default function Navbar(){
    return <>
        <header>
            <h1>Fresh CART</h1>
            <nav>
                <Link href="../app/home/page.js">Cart1</Link>
                
                <Link href="/">Cart2</Link>
                
                <Link href="/">Cart3</Link>
                
                <Link href="/">Cart4</Link>
            </nav>
        </header>

    </>
}