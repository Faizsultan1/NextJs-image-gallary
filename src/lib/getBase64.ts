import { getPlaiceholder } from "plaiceholder"
import type { Photo, ImagesResult } from "@/models/images"

async function getBase64(imgUrl: string) {
	try {
		const res = await fetch(imgUrl)

		if (!res.ok) {
			throw new Error(
				`Failed to fetch image :: ${res.status} ${res.statusText}`
			)
		}

		const buffer = await res.arrayBuffer()

		const { base64 } = await getPlaiceholder(Buffer.from(buffer))
		// console.log("base 64 ::::::", base64)
		return base64
	} catch (error) {
		if (error instanceof Error) console.log(error.stack)
	}
}

export default async function addBluredDataUrls(
	images: ImagesResult
): Promise<Photo[]> {
	const base64Promises = images.photos.map((photo) =>
		getBase64(photo.src.large)
	)
	const base64Results = await Promise.all(base64Promises)
	// console.log("base 64 result ::::", base64Results)

	const blurredPhotos: Photo[] = images.photos.map((photo, i) => {
		photo.blurredDataUrl = base64Results[i]
		return photo
	})

	return blurredPhotos
}
