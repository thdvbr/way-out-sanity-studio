// schemas/radio.js
export default {
  name: 'radio',
  title: 'Radio Show',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
    },
        {
      name: 'description',
      title: 'Description',
      type: 'text',
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
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true
      }
      },
    {
      name: 'publishedAt',
      title: 'Publish Date',
      type: 'datetime',
      description: 'Pick the day, month, and year this radio show goes live',
    },

    {
      name: 'mixcloudUrl',
      title: 'Mixcloud URL',
      type: 'url',
      description: 'Full Mixcloud embed or link URL',
      validation: Rule => Rule.uri({
        allowRelative: false,
        scheme: ['https']
      })
    },
    {
      name: 'tracklist',
      title: 'Tracklist',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'artist', title: 'Artist', type: 'string', validation: Rule => Rule.required() },
            { name: 'title', title: 'Track Title', type: 'string', validation: Rule => Rule.required() },
          ]
        }
      ]
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'heroImage',
      date: 'publishedAt',
    }
  },
  prepare(selection) {
    const { title, subtitle, media } = selection;
    return {
      title: title || 'Untitled',
      subtitle: subtitle,
      media: media
    };
  }
}
