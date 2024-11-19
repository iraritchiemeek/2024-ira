import type { CollectionConfig } from 'payload'

export const Page: CollectionConfig = {
  slug: 'page',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'bannerImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'Select or upload a banner image'
      }
    }
  ]
}
