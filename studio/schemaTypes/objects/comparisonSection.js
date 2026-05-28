import { defineType, defineField } from 'sanity'

// Used by: IsoDeco (old vs new website design),
//          Voorlopig (before vs after redesign)
export const comparisonSection = defineType({
  name: 'comparisonSection',
  title: 'Before / after comparison',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section title',
      type: 'string',
    }),
    defineField({
      name: 'beforeLabel',
      title: 'Before label',
      type: 'string',
      description: 'e.g. "Huidige website", "Voor"',
      initialValue: 'Voor',
    }),
    defineField({
      name: 'beforeImages',
      title: 'Before image(s)',
      type: 'array',
      description: 'One or more screenshots of the original design',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.min(1).max(4),
    }),
    defineField({
      name: 'afterLabel',
      title: 'After label',
      type: 'string',
      description: 'e.g. "Mijn ontwerp", "Na"',
      initialValue: 'Na',
    }),
    defineField({
      name: 'afterImages',
      title: 'After image(s)',
      type: 'array',
      description: 'One or more screenshots of the new design',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: (Rule) => Rule.min(1).max(4),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'afterImages.0',
    },
    prepare({ title, media }) {
      return {
        title: title || 'Before / after comparison',
        media,
      }
    },
  },
})
