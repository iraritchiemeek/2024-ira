import type { CollectionConfig } from 'payload'
import { Content } from './blocks/Content'

export const Page: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      admin: {
        description: 'The URL path for this page',
      }
    },
    {
      name: 'bannerImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'Select or upload a banner image'
      }
    },
    {
      name: 'layout',
      type: 'blocks',
      required: true,
      blocks: [
        Content,
      ],
      admin: {
        description: 'Choose the content blocks to build this page'
      }
    }
  ]
}
