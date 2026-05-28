import { defineType, defineField, defineArrayMember } from 'sanity'

// Used by: NRV (prototype videos + old UI video),
//          Stekplek (final prototype videos)
export const videoShowcaseSection = defineType({
  name: 'videoShowcaseSection',
  title: 'Video showcase',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section title',
      type: 'string',
      description: 'e.g. "Uiteindelijk prototype", "Oude user interface"',
    }),
    defineField({
      name: 'body',
      title: 'Section description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'videoItem',
          fields: [
            defineField({
              name: 'title',
              title: 'Video title',
              type: 'string',
              description: 'e.g. "Transparantie", "Gepersonaliseerd gemak"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
            }),
            defineField({
              name: 'video',
              title: 'Video file',
              type: 'file',
              options: { accept: 'video/mp4,video/*' },
            }),
            defineField({
              name: 'poster',
              title: 'Poster image',
              type: 'image',
              description: 'Shown before the video plays',
              options: { hotspot: true },
            }),
          ],
          preview: {
            select: { title: 'title' },
            prepare({ title }) {
              return { title: title || 'Video' }
            },
          },
        }),
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],

  preview: {
    select: { title: 'title' },
    prepare({ title }) {
      return { title: title || 'Video showcase' }
    },
  },
})
