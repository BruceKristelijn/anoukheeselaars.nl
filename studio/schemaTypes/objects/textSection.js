import { defineType, defineField } from 'sanity'

export const textSection = defineType({
  name: 'textSection',
  title: 'Text',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section title',
      type: 'string',
      description: 'e.g. "Concept", "Conclusie"',
    }),
    defineField({
      name: 'body',
      title: 'Body text',
      type: 'text',
      rows: 6,
      description: 'Use blank lines to separate paragraphs',
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: { title: 'title', body: 'body' },
    prepare({ title, body }) {
      return { title: title || 'Text', subtitle: body?.slice(0, 60) }
    },
  },
})
