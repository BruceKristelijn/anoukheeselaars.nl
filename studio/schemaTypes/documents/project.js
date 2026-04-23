import { defineType, defineField, defineArrayMember } from 'sanity'
import { orderRankField } from '@sanity/orderable-document-list'

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
    orderRankField({ type: 'project' }),
    defineField({
      name: 'showInNav',
      title: 'Show in navigation',
      type: 'boolean',
      description: 'When off the page still exists but won\'t appear in the nav bar',
      initialValue: true,
    }),

    // ─── Route theming ────────────────────────────────────────────────────────
    defineField({
      name: 'bgType',
      title: 'Background type',
      type: 'string',
      options: {
        list: [
          { title: 'Solid color', value: 'solid' },
          { title: 'Gradient (CSS)', value: 'gradient' },
        ],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'solid',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bgColorSolid',
      title: 'Background color',
      type: 'color',
      options: { disableAlpha: true },
      hidden: ({ document }) => document?.bgType !== 'solid',
    }),
    defineField({
      name: 'bgColorGradient',
      title: 'Background gradient',
      type: 'string',
      description: 'Any valid CSS value, e.g. "linear-gradient(180deg, #5E46CA 0%, #7D60FF 100%)"',
      hidden: ({ document }) => document?.bgType !== 'gradient',
    }),
    defineField({
      name: 'activeLinkColor',
      title: 'Active link color',
      type: 'color',
      description: 'Colour applied to the active nav link',
      options: { disableAlpha: true },
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
      type: 'text',
      description: 'Main body text shown below the intro grid',
      rows: 6,
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
        defineArrayMember({ type: 'textSection' }),
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
