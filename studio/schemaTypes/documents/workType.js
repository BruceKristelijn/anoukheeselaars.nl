import { defineType, defineField } from 'sanity'

export const workType = defineType({
  name: 'workType',
  title: 'workType',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'name',
    },
  },
})