import { ThListIcon } from '@sanity/icons'
export default {
  name: 'listicleItem',
  title: 'Listicle Item',
  type: 'object',
  icon: ThListIcon,
  fields: [
    {
      name: 'number',
      title: 'Number',
      type: 'string',
      description: 'e.g., "01", "02", "03"',
      validation: Rule => Rule.required(),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'content',
      title: 'Content (optional)',
      type: 'listicleBlockContent',
    },
  ],
  preview: {
    select: {
      number: 'number',
      title: 'title',
    },
    prepare({ number, title }) {
      return {
        title: `${number}. ${title}`,
        subtitle: 'Listicle item',
      };
    },
  },
}