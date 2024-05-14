import fetchImages from "@/lib/fetchImages"
import { ImagesResult } from "@/models/images"
import ImgContainer from "./ImgContainer"
import addBluredDataUrls from "@/lib/getBase64"
import getPrevNextPage from "@/lib/prevNextPage"
import Footer from "./Footer"

type Props = {
	topic?: string | undefined
	page?: string | undefined
}

export default async function Gallery({ topic = "curated", page }: Props) {
	let url
	if (topic === "curated" && page) {
		// without search having page
		url = `https://api.pexels.com/v1/curated?page=${page}`
	} else if (topic === "curated") {
		// homepage
		url = "https://api.pexels.com/v1/curated"
	} else if (!page) {
		// having search and first page
		url = `https://api.pexels.com/v1/search?query=${topic}`
	} else {
		// having search + pages
		url = `https://api.pexels.com/v1/search?query=${topic}&page=${page}`
	}

	const images: ImagesResult | undefined = await fetchImages(url)

	if (!images || images.per_page === 0)
		return <h2 className="m-4 text-2xl font-bold">No Images Found</h2>

	const photosWithBlur = await addBluredDataUrls(images)
	
	const {prevPage, nextPage} = getPrevNextPage(images)

	const footerProps = {topic, page, nextPage, prevPage}
	return (
		<>
			<section className=" my-3 grid grid-cols-2 sm:grid-cols-gallery auto-rows-[7px] sm:auto-rows-[11px] ">
				{photosWithBlur.map((photo) => (
					<ImgContainer key={photo.id} photo={photo} />
				))}
			</section>
			<Footer {...footerProps}/>
		</>
	)
}
