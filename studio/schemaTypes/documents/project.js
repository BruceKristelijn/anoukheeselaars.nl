import { defineType, defineField, defineArrayMember } from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    // ─── Identity ────────────────────────────────────────────────────────────
    defineField({
      name: 'organisation',
      title: 'Organisation',
      type: 'string',
      description: 'e.g. "Stekplek", "Maatwerk Online"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL path — must match the Vue route (e.g. "stekplek")',
      options: { source: 'organisation', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'workType',
      title: 'Work type',
      type: 'string',
      description: 'Shown on the card and page header',
      options: {
        list: [
          { title: 'UI/UX Design', value: 'UI/UX Design' },
          { title: 'Visual Design', value: 'Visual Design' },
          { title: 'Merkidentiteit', value: 'Merkidentiteit' },
          { title: 'Website-ontwerp', value: 'Website-ontwerp' },
          { title: 'App-ontwerp', value: 'App-ontwerp' },
          { title: 'Concept voorstel', value: 'Concept voorstel' },
          { title: 'Visual & UI/UX design', value: 'Visual & UI/UX design' },
          { title: 'Afstudeer opdracht', value: 'Afstudeer opdracht' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'orderRank',
      title: 'Order',
      type: 'number',
      description: 'Controls display order on the home page',
    }),

    // ─── Route theming ────────────────────────────────────────────────────────
    defineField({
      name: 'bgColor',
      title: 'Background color',
      type: 'string',
      description:
        'CSS value applied to --body-bg, e.g. "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'activeLinkColor',
      title: 'Active link color',
      type: 'string',
      description: 'CSS value applied to --active-url, e.g. "#ffffff"',
      validation: (Rule) => Rule.required(),
    }),

    // ─── Media ────────────────────────────────────────────────────────────────
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Shown on the work card and at the top of the project page',
      options: { hotspot: false },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cardImage',
      title: 'Card image',
      type: 'image',
      description: 'Thumbnail shown on the home page work grid',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headerImage',
      title: 'Header image',
      type: 'image',
      description: 'Full-width banner at the top of the project page',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),

    // ─── Description ─────────────────────────────────────────────────────────
    defineField({
      name: 'sideDescription',
      title: 'Side description',
      type: 'text',
      rows: 3,
      description: 'Short summary shown in the right column of the page header',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      description: 'Main body — each item becomes a separate paragraph',
      of: [defineArrayMember({ type: 'block' })],
      validation: (Rule) => Rule.required(),
    }),

    // ─── Content sections ─────────────────────────────────────────────────────
    defineField({
      name: 'sections',
      title: 'Content sections',
      type: 'array',
      description: 'All the visual sections below the intro card',
      of: [
        defineArrayMember({ type: 'imageGallerySection' }),
        defineArrayMember({ type: 'videoShowcaseSection' }),
        defineArrayMember({ type: 'comparisonSection' }),
        defineArrayMember({ type: 'showcaseCardSection' }),
        defineArrayMember({ type: 'analysisCardSection' }),
        defineArrayMember({ type: 'researchSection' }),
      ],
    }),
  ],

  preview: {
    select: {
      title: 'organisation',
      subtitle: 'workType',
      media: 'cardImage',
    },
  },
})
