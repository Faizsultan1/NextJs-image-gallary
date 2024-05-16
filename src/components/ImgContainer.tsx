import Image from "next/image"
import { Photo } from "@/models/images"
import Link from "next/link"

type Props = {
	photo: Photo
}
const ImgContainer = ({ photo }: Props) => {
	const heightWidthRatio = photo.height / photo.width
	const galleryHeight = Math.ceil(250 * heightWidthRatio)
	const photoSpan = Math.ceil(galleryHeight / 10) +1
	
	return (
		<div className="w-[175px] sm:w-[270px] justify-self-center" style={{gridRow : `span ${photoSpan}`}}>
			<Link href={photo.url} target="_blank" className="grid place-content-center bg-black">
			<div className="rounded-xl  overflow-hidden group">
			<Image
				src={photo.src.large}
				alt={photo.alt}
				width={photo.width}
				height={photo.height}
				placeholder="blur"
				blurDataURL={photo.blurredDataUrl}
				// sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
				className=" group-hover:opacity-75"
				sizes="250px"
			/>
			</div>
   </Link>
		</div>
	)
}

export default ImgContainer
