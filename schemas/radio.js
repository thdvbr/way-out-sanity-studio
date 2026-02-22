// schemas/radio.js
import {PlayIcon} from '@sanity/icons'

export default {
  name: 'radio',
  title: 'Radio Show',
  type: 'document',
  icon: PlayIcon,
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
      rows: 3,
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
      name: 'subCategory',
      title: 'Sub Category',
      type: 'reference',
      to: { type: 'subCategory' },
      description:
        'Subcategories can be custom added at any time. They appear at the top of the articles  in the ‘more to read’ area of the site.',
      validation: (rule) => rule.required().error('Sub Category is required before publishing'),
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
      description: 'Pick the day, month, and year this radio show goes live. Shows are sorted by date, newest first',
    },
    {
      name: 'episodeLabel',
      title: 'Episode Label',
      type: 'string',
      description: 'Pick the episode label for the show. Ex) Episode 1.',
      validation: Rule => Rule.max(50).warning(`A label shouldn't be more than 50 characters.`)
      
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
    },
      
    {
      name: 'featured',
      title: 'Feature on Homepage',
      type: 'boolean',
      description: 'Pin this to the top of the homepage',
      initialValue: false,
    }
,
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      episodeLabel: 'episodeLabel',
      media: 'heroImage',
      date: 'publishedAt',
    }
  },
  prepare(selection) {
    const { title, subtitle, episodeLabel, media ,date } = selection;
    return {
      title: title || 'Untitled',
      subtitle: episodeLabel,
      media: media,

    };
  }
}
