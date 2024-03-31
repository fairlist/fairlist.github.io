import { defineCollection, z } from 'astro:content';

const servers = defineCollection({
	type: 'data',
	schema: z.object({
		slug: z.string(),
		name: z.string(),
		description: z.string(),
		ip: z.string(), // Absolutly required.

		github: z.string().optional(),
		banner: z.string().optional(),
	}),
});

export const collections = { servers };
