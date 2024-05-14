import { z } from "zod"

const BasicImageSchema = z.object({
	page: z.number(),
	per_page: z.number(),
	total_results: z.number(),
	prev_page: z.string().optional(),
	next_page: z.string().optional(),
})

const imageSchema = z.object({
	id: z.number(),
	width: z.number(),
	height: z.number(),
	url: z.string(),
	src: z.object({
		large: z.string(),
	}),
	alt: z.string(),
	blurredDataUrl: z.string().optional(),
})

export const imageSchemaWithPhotos = BasicImageSchema.extend({
	photos: z.array(imageSchema),
})

export type Photo = z.infer<typeof imageSchema>
export type ImagesResult = z.infer<typeof imageSchemaWithPhotos>