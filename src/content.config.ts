import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const updates = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/updates' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    tag: z.enum(['Event recap', 'News', 'Growing season', 'Community']),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    display_date: z.string(),
    recurring: z.boolean().default(false),
    recurring_label: z.string().optional(),
  }),
});

export const collections = { updates, events };
