import { defineType, defineField, defineArrayMember } from 'sanity'

// Used by: ZAB (Toelichting en onderzoek — description + methods table)
// Could also apply to any project that lists design methods/techniques.
export const researchSection = defineType({
  name: 'researchSection',
  title: 'Research / methods',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section title',
      type: 'string',
      description: 'e.g. "Toelichting en onderzoek"',
    }),
    defineField({
      name: 'body',
      title: 'Body text',
      type: 'text',
      rows: 5,
      description: 'Explanation of the research or approach',
    }),
    defineField({
      name: 'methodsLabel',
      title: 'Methods table label',
      type: 'string',
      description: 'Heading above the methods grid',
      initialValue: 'Methoden & technieken',
    }),
    defineField({
      name: 'methods',
      title: 'Methods / techniques',
      type: 'array',
      description: 'Each item is one cell in the methods grid',
      of: [defineArrayMember({ type: 'string' })],
    }),
  ],

  preview: {
    select: { title: 'title' },
    prepare({ title }) {
      return { title: title || 'Research / methods' }
    },
  },
})
