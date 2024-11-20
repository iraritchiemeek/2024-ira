import { Block } from "payload";

export const Content: Block = {
  slug: 'content',
  labels: {
    singular: 'Content Block',
    plural: 'Content Blocks',
  },
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'supporting',
      label: 'Supporting Content',
      type: 'richText',
      admin: {
        description: 'Additional content that appears alongside the main content',
      }
    },
    {
      name: 'content',
      label: 'Content',
      type: 'richText',
      required: true,
    },
  ]
} 