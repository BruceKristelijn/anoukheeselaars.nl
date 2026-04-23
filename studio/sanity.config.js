import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { colorInput } from '@sanity/color-input'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'anoukheeselaars.nl',

  projectId: 'y2276jym',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Home page')
              .id('homePage')
              .child(
                S.document()
                  .schemaType('homePage')
                  .documentId('homePage'),
              ),
            orderableDocumentListDeskItem({ title: 'Projects', type: 'project', S, context}),
            S.listItem()
              .title('Work types')
              .id('workType')
              .child(
                S.documentTypeList('workType').title('Work types'),
              ),
      ]),
    }),
    visionTool(),
    colorInput(),
  ],

  document: {
    actions: (input,
    { schemaType
    }) =>
      schemaType === 'homePage'
        ? input.filter(
          ({ action
    }) => !['duplicate', 'delete', 'unpublish'
    ].includes(action !== null),
        )
        : input,
  },

  schema: {
    types: schemaTypes,
  },
})
