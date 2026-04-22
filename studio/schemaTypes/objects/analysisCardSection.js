import { defineType, defineField, defineArrayMember } from 'sanity'

// Used by: IsoDeco (the 5 UX analysis cards per page section,
//          each with a title, observation, and recommendations)
export const analysisCardSection = defineType({
  name: 'analysisCardSection',
  title: 'Analysis cards',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Section title',
      type: 'string',
      description: 'e.g. "Toelichting"',
    }),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'analysisCard',
          fields: [
            defineField({
              name: 'sectionName',
              title: 'Page section name',
              type: 'string',
              description:
                'The part of the website being analysed, e.g. "Header", "USP\'s"',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'observation',
              title: 'Observation / problem',
              type: 'text',
              rows: 3,
              description: 'What is wrong or could be improved',
            }),
            defineField({
              name: 'recommendations',
              title: 'Recommendations',
              type: 'array',
              description: 'Bullet-point suggestions',
              of: [defineArrayMember({ type: 'string' })],
            }),
          ],
          preview: {
            select: { title: 'sectionName' },
          },
        }),
      ],
      validation: (Rule) => Rule.min(1),
    }),
  ],

  preview: {
    select: { title: 'title' },
    prepare({ title }) {
      return { title: title || 'Analysis cards' }
    },
  },
})
