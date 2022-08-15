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
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
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
