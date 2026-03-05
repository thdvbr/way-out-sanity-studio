import { mainStyle, speakerStyle, secondaryStyle, introStyle, copenhagenGrotesk, quoteStyle } from '../styles/blockStyles.jsx';
import { ImageIcon, VideoIcon, ThListIcon } from '@sanity/icons'
import { IoMdMusicalNotes } from "react-icons/io";
/**
 * This is the schema definition for the rich text fields used for
 * for this blog studio. When you import it in schemas.js it can be
 * reused in other parts of the studio with:
 *  {
 *    name: 'someName',
 *    title: 'Some title',
 *    type: 'blockContent'
 *  }
 */
export default {
  title: 'Block Content',
  name: 'blockContent',
  type: 'array',
  of: [
    {
      title: 'Block',
      type: 'block',
      // Styles let you set what your user can mark up blocks with. These
      // correspond with HTML tags, but you can set any title or value
      // you want and decide how you want to deal with it where you want to
      // use your content.
      styles: [
        {
          title: 'Averia Serif',
          value: 'averiaSerif',
          blockEditor: {
            render: mainStyle,
          },
        },
        {
          title: 'Agrandir Narrow',
          value: 'agrandirNarrow',
          blockEditor: { render: secondaryStyle },
        },
        { title: 'OPTIArtCraft', value: 'optiArtCraft', blockEditor: { render: introStyle } },
        { 
          title: 'OPTIArtCraft with Drop Cap',  // New style!
          value: 'optiArtCraftDropCap', 
          blockEditor: { render: introStyle }  // Same preview in editor
        },
        { title: 'Copenhagen Grotesk', value: 'copenhagenGrotesk', blockEditor: { render: copenhagenGrotesk } },
        { title: 'Quote', value: 'quote', blockEditor: {render: quoteStyle}},
        // { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2', blockEditor: {
          render: mainStyle,
        }, },
        // { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' , blockEditor: {
          render: mainStyle,
        },},
        // { title: 'H4', value: 'h4' },
        // { title: 'Quote', value: 'blockquote' },
      ],
      lists: [{ title: 'Bullet', value: 'bullet' }],
      
      // Marks let you mark up inline text in the block editor.
      marks: {
        // Decorators usually describe a single property – e.g. a typographic
        // preference or highlighting by editors.
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Underline', value: 'underline' },
          { title: 'Strike', value: 'strike-through' },
          { title: 'Speaker', value: 'secondary', blockEditor: { render: speakerStyle },}
        ],
        // Annotations can be any object structure – e.g. a link or a footnote.
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
    
    // You can add additional types here. Note that you can't use
    // primitive types such as 'string' and 'number' in the same array
    // as a block type.
         {
      type: 'image',
      icon: ImageIcon,
      options: { hotspot: true, metadata: ['lqip']},
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true
          }
        },
        {
      name: 'link',
      type: 'url',
      title: 'Link',
      options: {
        isHighlighted: true
      },
      validation: Rule => Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel']
      }).optional()
    }
      ]
    },
    {
      type: 'youtube',
      icon: VideoIcon
    },
    {
      type: 'mixcloud',
      icon: IoMdMusicalNotes
    },
    {
      type: 'listicleItem',
      icon: ThListIcon
    }
  ],
};
