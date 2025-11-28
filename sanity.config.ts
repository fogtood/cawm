import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'CAWM CMS',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  basePath: '/studio',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Settings')
              .child(
                S.list()
                  .title('Settings')
                  .items([
                    S.listItem()
                      .title('Navigation')
                      .child(S.document().schemaType('navigation').documentId('navigation')),
                    S.listItem()
                      .title('General Settings')
                      .child(
                        S.document().schemaType('generalSettings').documentId('generalSettings')
                      ),
                  ])
              ),
            S.divider(),
            S.listItem()
              .title('Pages')
              .child(
                S.list()
                  .title('Pages')
                  .items([
                    S.listItem()
                      .title('Home Page')
                      .child(S.document().schemaType('homePage').documentId('homePage')),
                    S.listItem()
                      .title('About Page')
                      .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
                    S.listItem()
                      .title('About Youths Page')
                      .child(
                        S.document().schemaType('aboutYouthsPage').documentId('aboutYouthsPage')
                      ),
                    S.listItem()
                      .title('About Ministries Page')
                      .child(
                        S.document()
                          .schemaType('aboutMinistriesPage')
                          .documentId('aboutMinistriesPage')
                      ),
                    S.listItem()
                      .title('Media Page')
                      .child(S.document().schemaType('mediaPage').documentId('mediaPage')),
                    S.listItem()
                      .title('Events Page')
                      .child(S.document().schemaType('eventsPage').documentId('eventsPage')),
                    S.listItem()
                      .title('Sermons Page')
                      .child(S.document().schemaType('sermonsPage').documentId('sermonsPage')),
                    S.listItem()
                      .title('Contact Page')
                      .child(S.document().schemaType('contactPage').documentId('contactPage')),
                    S.divider(),
                    S.listItem()
                      .title('Dynamic Pages')
                      .child(S.documentTypeList('dynamicPage').title('Dynamic Pages')),
                  ])
              ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (listItem) =>
                ![
                  'homePage',
                  'aboutPage',
                  'aboutYouthsPage',
                  'aboutMinistriesPage',
                  'mediaPage',
                  'eventsPage',
                  'sermonsPage',
                  'contactPage',
                  'navigation',
                  'generalSettings',
                  'dynamicPage',
                ].includes(listItem.getId()!)
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
