import Link from "next/link"
import Search from "./Search"

export default function Navbar() {
	return (
		<header className="bg-black sticky top-0 z-10">
			<nav className="flex flex-col gap-4 sm:flex-row sm:justify-between items-center p-4 font-bold max-w-6xl mx-auto text-white">
				<Link href={"/"}>
					<h1 className="text-2xl sm:text-3xl text-center whitespace-nowrap">Your Image Galary</h1>
				</Link>
                <Search/>
			</nav>
		</header>
	)
}