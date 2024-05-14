import Gallery from "@/components/Gallery"
import Loader from "@/components/Loader"
import { Suspense } from "react"
type Props = {
	params: {
		myParams: (string | undefined)[]
	}
}

export function generateMetadata({ params: { myParams } }: Props) {
	const topic = myParams?.[0] ?? "curated"
	const page = myParams?.[1] ?? "1"
	return {
		title: `Results for ${topic} page-${page}`,
	}
}

export default function SearchResults({ params: { myParams } }: Props) {
	const topic = myParams?.[0] ?? "curated"
	const page = myParams?.[1] ?? "1"
	return (
		<>
			<Suspense fallback={<Loader/>}>
				<Gallery topic={topic} page={page} />
			</Suspense>
		</>
	)
}
