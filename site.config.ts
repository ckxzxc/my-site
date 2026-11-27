import { z } from "astro/zod";


const fonts = z.enum([
    "comic", "helvetica", "georgia", "bradley",
]).default('helvetica').catch('helvetica');



export const siteSchema = z.object({
    domain: z.url(),
    language: z.string().default('en').catch('en'),
    siteName: z.string().default(''),
    logo: z.string().optional(),
    theme: z.enum(['light', 'dark', 'bumblebee', 'cupcake', 'pastel'], "light").default('light').catch("light"),
    fontDisplay: fonts,
    fontBody: fonts,
    navigation: z.object({
        color: z.enum(["base", "primary", "secondary", "accent", "neutral"]).default('base'),
        buttonColor: z.enum(["base", "primary", "secondary", "accent", "neutral"]).default('neutral'),
        buttonStyle: z.enum(["default", "soft"]).default("default").catch("default"),
        position: z.enum(['top', 'bottom']).default('top'),
        rounded: z.boolean().default(true),
        items: z.array(z.object({
            label: z.string().catch(''),
            url: z.string().catch('')
        }))
    })
})

export type Site = z.infer<typeof siteSchema>;