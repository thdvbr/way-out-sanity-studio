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
      validation: (rule) => rule.required().error('Title is required before publishing'),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description:
        'Be sure to check the length and formatting for your subtitle in the preview',
      validation: (rule) => rule.required().error('Subtitle is required before publishing'),
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
      validation: (rule) => rule.required().error('Slug is required before publishing').custom((slug) => {
        if (slug?.current && /\s/.test(slug.current)) {
          return 'Slug cannot contain spaces';
        }
        return true;
      }),
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
      validation: (rule) => rule.required().error('Main Category is required before publishing'),
    },
    {
      name: 'subCategory',
      title: 'Sub Category',
      type: 'reference',
      to: { type: 'subCategory' },
      description:
        'Subcategories can be custom added at any time. They appear at the top of the articles  in the ‘more to read’ area of the site.',
      validation: (rule) => rule.required().error('Sub Category is required before publishing'),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      description: 'This is needed to sort the articles by date. It won’t show on the article itself',
      validation: (rule) => rule.required().error('Date is required before publishing'),
    },
    {
      name: 'credits',
      title: 'Credits',
      type: 'text',
      rows: 3,  
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
  name: 'externalLinks',
  title: 'External Links',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        {
          name: 'label',
          title: 'Label',
          type: 'string',
          description: 'e.g., "SHOP", "X"'
        },
          {
          name: 'displayText',
          title: 'Display Text',
          type: 'string',
          description: 'Short text to show (e.g., "@tabloidpress" or "Big Cartel")'
        },
        {
          name: 'url',
          title: 'URL',
          type: 'url',
          description: 'Full URL including https://'
        },
      ],
      preview: {
        select: {
          title: 'label',
          subtitle: 'displayText'
        }
      }
    }
  ]
},
    {
  name: 'socialLinks',
  title: 'Social Links',
  type: 'object',
  fields: [
    {
      name: 'facebook',
      title: 'Facebook URL',
      type: 'url',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https']
      })
    },
    {
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https']
      })
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.email()
    }
  ]
}
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
