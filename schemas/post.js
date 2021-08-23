export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true
          }
        }
      ]
    },
    {
      name: 'previewImage',
      title: 'Preview Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'mainCategory',
      title: 'Main Category',
      type: 'reference',
      to: {type: 'category'},
    },
    {
      name: 'subCategory',
      title: 'Sub Category',
      type: 'reference',
      to: {type: 'subCategory'},
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'credits',
      title: 'Credits',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'artistLink',
      title: 'Artist Link',
      type: 'blockContent'
    }
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      date: 'publishedAt'
    },
    prepare(selection) {
      const {title, date, media} = selection
      return ( {
        media: media,
        title: title,
        subtitle: `${date.split('-')[0]}/${date.split('-')[1]}`,
      })
    },
  },
}
