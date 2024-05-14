import Gallery from "@/components/Gallery"
import Loader from "@/components/Loader"
import { Suspense } from "react"

export default function Home() {
	return (
		<Suspense fallback={<Loader/>}>
			<Gallery />
		</Suspense>
	)
}
