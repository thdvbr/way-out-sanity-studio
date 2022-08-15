import { ImNewspaper } from 'react-icons/im';

export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: ImNewspaper,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description:
        'Be sure to check the length and formatting for your title in the preview',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description:
        'Be sure to check the length and formatting for your subtitle in the preview',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      description: 'Custom hyperlink text',
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      description: 'Banner image on front page + first image shown on article',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true,
          },
          description: 'Text shown underneath the image on the article page',
        },
      ],
    },
    {
      name: 'previewImage',
      title: 'Preview Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Image featured in the main grid + ‘more to read’ area',
    },
    {
      name: 'mainCategory',
      title: 'Main Category',
      type: 'reference',
      to: { type: 'category' },
      description:
        'Dropdown selects the menu category in which the article appears (Interview, Reviews, Radio)',
    },
    {
      name: 'subCategory',
      title: 'Sub Category',
      type: 'reference',
      to: { type: 'subCategory' },
      description:
        'Subcategories can be custom added at any time. They appear at the top of the articles  in the ‘more to read’ area of the site.',
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      description: 'Day, Month, and Year of article post.',
    },
    {
      name: 'credits',
      title: 'Credits',
      type: 'string',
      description:
        '[ Optional ] Open format entry for any credits (writing, photos, etc) ',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      description:
        'Here is where you will enter the article text, photos, and links. \n• Intro Font: OptiArtCraft Bold\n • Speaker Font: Bold S Icon\n• Interview Question Font: Agrandir Narrow\n • Interviewee Response Font: Averia Serif\n • Centered Quote Font: Quote \n  • Artist Link Font - Normal',
    },
    {
      name: 'artistLink',
      title: 'Artist Link',
      type: 'blockContent',
      description:
        'Here is where you enter whatever custom links you want to include about the topic of your post (website, person’s social media, etc)   ',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      date: 'publishedAt',
    },
    prepare(selection) {
      const { title, date, media } = selection;
      return {
        media: media,
        title: title,
        subtitle: `${date.split('-')[0]}/${date.split('-')[1]}`,
      };
    },
  },
};
