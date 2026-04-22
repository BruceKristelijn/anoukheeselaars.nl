import { defineType, defineField, defineArrayMember } from 'sanity'

// Used by: MaatwerkOnline (abri's grid, slides grid, ad image),
//          ZAB (screens pair), IrisLearningSolutions (page screenshots),
//          Voorlopig (before group, after group)
export const imageGallerySection = defineType({
  name: 'imageGallerySection',
  title: 'Image gallery',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section title',
      type: 'string',
      description: 'e.g. "Abri\'s", "Huidige website"',
    }),
    defineField({
      name: 'body',
      title: 'Body text',
      type: 'text',
      rows: 3,
      description: 'Optional text shown above or beside the images',
    }),
    defineField({
      name: 'layout',
      title: 'Grid layout',
      type: 'string',
      options: {
        list: [
          { title: 'Single (full width)', value: 'single' },
          { title: '2 columns', value: '2col' },
          { title: '3 columns', value: '3col' },
          { title: '5 columns', value: '5col' },
          { title: 'Auto (fills row)', value: 'auto' },
        ],
        layout: 'radio',
      },
      initialValue: 'auto',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: { hotspot: true },
          fields: [
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }),
          ],
        }),
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'images.0',
    },
    prepare({ title, media }) {
      return {
        title: title || 'Image gallery',
        media,
      }
    },
  },
})
