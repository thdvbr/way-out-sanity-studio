import { mainStyle, speakerStyle, secondaryStyle, introStyle, copenhagenGrotesk, quoteStyle } from '../styles/blockStyles.jsx';
import { ImageIcon, VideoIcon } from '@sanity/icons'

export default {
  title: 'Listicle Block Content',
  name: 'listicleBlockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      styles: [
        { title: 'Averia Serif', value: 'averiaSerif', blockEditor: { render: mainStyle } },
        { title: 'Agrandir Narrow', value: 'agrandirNarrow', blockEditor: { render: secondaryStyle } },
        { title: 'OPTIArtCraft', value: 'optiArtCraft', blockEditor: { render: introStyle } },
        { title: 'Copenhagen Grotesk', value: 'copenhagenGrotesk', blockEditor: { render: copenhagenGrotesk } },
        { title: 'Quote', value: 'quote', blockEditor: { render: quoteStyle } },
        { title: 'H2', value: 'h2', blockEditor: { render: mainStyle } },
        { title: 'H3', value: 'h3', blockEditor: { render: mainStyle } },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Underline', value: 'underline' },
          { title: 'Strike', value: 'strike-through' },
          { title: 'Speaker', value: 'secondary', blockEditor: { render: speakerStyle } }
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
                validation: Rule => Rule.uri({
                  scheme: ['http', 'https', 'mailto', 'tel']
                })
              },
            ],
          },
        ],
      },
    },
    // DON'T include listicleItem here
    {
      type: 'image',
      icon: ImageIcon,
      options: { hotspot: true, metadata: ['lqip']},
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: { isHighlighted: true }
        }
      ]
    },
    {
        type: 'youtube',
        icon: VideoIcon
    }
  ],
};