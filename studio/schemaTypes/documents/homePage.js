import { defineType, defineField } from 'sanity'

// Singleton document — only one of these should ever exist.
// In the Studio you can hide the "create" button via a custom structure
// or just leave the default and never create a second one.
export const homePage = defineType({
  name: 'homePage',
  title: 'Home page',
  type: 'document',
  fields: [
    // ─── Hero ─────────────────────────────────────────────────────────────────
    defineField({
      name: 'heroGreeting',
      title: 'Hero greeting',
      type: 'string',
      description: 'The "Hey! Ik ben" line above the name',
      initialValue: 'Hey! Ik ben',
    }),
    defineField({
      name: 'heroName',
      title: 'Name',
      type: 'string',
      description: 'Large animated name in the hero',
      initialValue: 'Anouk',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero image',
      type: 'image',
      description: 'Portrait shown on the right side of the hero',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'introParagraph',
      title: 'Intro paragraph',
      type: 'text',
      rows: 4,
      description: 'The short bio below the name',
      validation: (Rule) => Rule.required(),
    }),

    // ─── Work section ─────────────────────────────────────────────────────────
    defineField({
      name: 'workSectionHeading',
      title: 'Work section heading',
      type: 'string',
      initialValue: 'Mijn werk.',
    }),
    defineField({
      name: 'featuredProjects',
      title: 'Featured projects',
      type: 'array',
      description: 'Projects shown in the home grid, in display order',
      of: [
        {
          type: 'reference',
          to: [{ type: 'project' }],
        },
      ],
    }),

    // ─── Contact ──────────────────────────────────────────────────────────────
    defineField({
      name: 'contactSectionHeading',
      title: 'Contact section heading',
      type: 'string',
      initialValue: 'Contact.',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Phone number',
      type: 'string',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Email address',
      type: 'string',
    }),
  ],

  preview: {
    prepare() {
      return { title: 'Home page' }
    },
  },
})
