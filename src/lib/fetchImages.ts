import { ImagesResult } from "@/models/images";
import { imageSchemaWithPhotos } from "@/models/images";
import { env } from "./env";




async function fetchImages(url : string) : Promise<ImagesResult | undefined> {
  try {
    const res = await fetch(url, {
        headers : {
            Authorization : env.PEXELS_API_KEY
        }
    })

    if (!res.ok) {
        throw new Error("images fetching error\n")
    }

    const ImagesResult : ImagesResult = await res.json()

    // console.log(ImagesResult)

    const parsedData = imageSchemaWithPhotos.parse(ImagesResult)

    if(parsedData.total_results === 0) return undefined 

    return parsedData
  } catch (error) {
    if(error instanceof Error) console.log(error.stack)
  }
}

export default fetchImages
