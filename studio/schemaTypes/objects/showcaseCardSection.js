import { defineType, defineField, defineArrayMember } from 'sanity'

// Used by: SavannaDevelopments (logo, brochure, Jungle Play cards),
//          BooksByAni (concept showcase, Instagram feed showcases)
export const showcaseCardSection = defineType({
  name: 'showcaseCardSection',
  title: 'Showcase cards',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section title',
      type: 'string',
    }),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'showcaseCard',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'title',
              title: 'Card title',
              type: 'string',
              description: 'e.g. "Logo design - Savanna Developments"',
            }),
            defineField({
              name: 'body',
              title: 'Card description',
              type: 'text',
              rows: 4,
            }),
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image',
            },
          },
        }),
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'cards.0.image',
    },
    prepare({ title, media }) {
      return {
        title: title || 'Showcase cards',
        media,
      }
    },
  },
})
