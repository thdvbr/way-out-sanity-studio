import { ImFileEmpty } from 'react-icons/im';
export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  icon: ImFileEmpty,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      readOnly: true,
      description: '🔒 Do not edit — changing the title affects SEO and routing.',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      readOnly: true,
      description: '🔒 Do not edit — this is the live URL path.',
      option: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],
};
