import { defineCollection } from "astro:content";
import { z } from "astro/zod";

// 2. Import loader(s)
import { glob } from 'astro/loaders';

const gap = z.enum(['none', 'sm', 'md', 'lg']).default('none');
const color = z.enum(["base", "primary", "secondary", "accent", "neutral", "info", "success", "warning", "error"]).default('base');


const textSchema = z.object({
    type: z.literal("text"),
    gap: gap,
    hierarchy: z.enum(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p']).default('p'),
    font: z.enum(['body', 'display']).default('body'),
    size: z.enum(['text-9xl', 'text-8xl','text-7xl', 'text-6xl', 'text-5xl', 'text-4xl', 'text-3xl', 'text-2xl', 'text-xl', 'text-lg', 'text-base', 'text-sm', 'text-xs']).default('text-base'),
    weight: z.enum(['normal', 'semibold', 'bold']).default('normal'),
    color: z.enum(['inherit', 'base', 'primary', 'secondary', 'accent', 'neutral', 'info', 'success', 'warning', 'error', 'primaryContent', 'secondaryContent', 'accentContent', 'neutralContent', 'successContent', 'infoContent', 'errorContent', 'warningContent']).default('inherit'),
    align: z.enum(["start", "center", "end"]).default("start"),
    muted: z.boolean().default(false),
    text: z.string("Text content required!")
});


const hoursSchema = z.object({
    type: z.literal("hours"),
    gap: gap,
    style: z.enum(["compact", "space", "stack"]).default("space"),
    times: z.array(
        z.object({
            day: z.string("Required field!"),
            hours: z.array(z.string("Require at least one item!"))
    }))
});

const pricelistSchema = z.object({
    type: z.literal("pricelist"),
    gap: gap,
    name: z.string(),
    style: z.enum(["default", "accordion"]).default("default"),
    componentStyle: z.enum(["comma", "bullet"]).default("comma"),
    categories: z.array(z.object({
        name: z.string("Category name required!"),
        items: z.array(z.object({
            name: z.string("Category item required!"),
            price: z.string().optional(),
            components: z.array(z.string()).optional(),
            notes: z.string().optional()
        }))
    }))
});

const accordionSchema = z.object({
    type: z.literal("accordion"),
    gap: gap,
    name: z.string("Unique accordion name required"),
    items: z.array(z.object({
        title: z.string("Accordion item title required!"),
        text: z.string("Accordion item text required!")
    }))
});

const listSchema = z.object({
    type: z.literal("list"),
    gap: gap,
    style: z.enum(['stack', 'compact']),
    items: z.array(z.object({
        heading: z.string().optional(),
        title: z.string("List item title required!"),
        text: z.string().optional(),
        link: z.object({
            label: z.string(),
            url: z.string("Url might be invalid!")
        }).optional()
    }))
});



const buttonsSchema = z.object({
    type: z.literal("buttons"),
    gap: gap,
    layout: z.enum(['stack', 'horizontal']).default('horizontal'),
    align: z.enum(['start', 'center', 'end']).default('start'),
    buttons: z.array(z.object({
        style: z.enum(["default", "soft", "outline", "dash", "ghost", "link"]).default('default'),
        size: z.enum(['md', 'sm']).default('md'),
        color: color,
        newTab: z.boolean().default(false),
        label: z.string(),
        url: z.string("Url might be invalid!"),
    })),
});


const singleImageSchema = z.object({
    type: z.literal("image"),
    gap: gap,
    path: z.string().min(1, "Image path might be invalid!"),
    alt: z.string().min(1, "Image description required!"),
    ratio: z.enum(['original', '1:1', '4:3', '3:4']).default('original'),
    align: z.enum(['left', 'center', 'right']).default('center'),
    width: z.enum(['icon', 'avatar', 'full']).default('full'),
    rounded: z.boolean().default(false)
});

const gallerySchema = z.object({
    type: z.literal("gallery"),
    gap: gap,
    minColumns: z.enum(['1', '2']).default('1'),
    maxColumns: z.enum(['2', '3', '4']).default('3'),
    ratio: z.enum(['3/4', '4/3', '1/1']),
    display: z.enum(['cover', 'contain']).default('cover'),
    images: z.array(z.object({
        path: z.string(),
        alt: z.string().min(1, "Image description required!")
    }))
});

const cardsSchema = z.object({
    type: z.literal("cards"),
    gap: gap,
    columns: z.enum(['1', '2', '3']).default('2'),
    style: z.enum(['default', 'small']).default('default'),
    cards: z.array(z.object({
        color: color,
        image: z.object({
            path: z.string(),
            alt: z.string().min(1, "Image description required!")
        }).optional(),
        title: z.string("Card title required"),
        description: z.string().optional(),
        link: z.object({
            label: z.string().default("See more"),
            url: z.string("Invalid url!")
        }).optional()
        
    }))
});



export const componentSchema = z.discriminatedUnion("type", [
    textSchema,
    hoursSchema,
    pricelistSchema,
    accordionSchema,
    listSchema,
    buttonsSchema,
    singleImageSchema,
    gallerySchema,
    cardsSchema
]);

export const blockSchema = z.object({
    align: z.enum(["start", "center", "end"]).default("start"),
    width: z.enum(["full", "lg", "md"]).default('md'),
    gap: z.enum(['none', 'lg', 'md', 'sm']).default('md'),
    color: z.enum(["none", "base100", "primary", "secondary", "neutral", "accent", "info", "success", "warning", "error"]).default("base100"),
    effect: z.enum(["glass", "shadow"]).optional(),
    border: z.boolean().default(false),
    components: z.array(componentSchema, "Require at least one component!")
});

export const sectionSchema = z.object({
    id: z.string("Section id required!"),
    height: z.enum(['auto', 'screen']).default('auto'),
    padding: z.enum(['content', 'topSpace']).default('content'),
    color: z.enum(["none", "base100", "base200", "base300", "primary", "secondary", "neutral", "accent", "info", "success", "warning", "error"]).default("base100"),
    bgDesktop: z.string().optional(),
    bgMobile: z.string().optional(),
    justifyContent: z.enum(['start', 'center', 'end', 'between', 'around', 'evenly']).default("start"),
    blocks: z.array(blockSchema, "Require at least one block!"),
});

export const pageSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    sections: z.array(sectionSchema, "Require at least one section!")
}, "Invalid inputs. Might be something missing.");

const pages = defineCollection({
    loader: glob({ base: './src/content/pages', pattern: '**/*.yml' }),
        schema: pageSchema
});
export const collections = {pages}




export type Components = z.infer<typeof componentSchema>;
export type Block = z.infer<typeof blockSchema>;
export type Section = z.infer<typeof sectionSchema>;
export type Page = z.infer<typeof pageSchema>;
export type Hours = z.infer<typeof hoursSchema>;
export type Pricelist = z.infer<typeof pricelistSchema>;
export type Text = z.infer<typeof textSchema>;
export type Accordion = z.infer<typeof accordionSchema>;
export type List = z.infer<typeof listSchema>;
export type Buttons = z.infer<typeof buttonsSchema>;
export type SingleImage = z.infer<typeof singleImageSchema>;
export type Gallery = z.infer<typeof gallerySchema>;
export type Cards = z.infer<typeof cardsSchema>;