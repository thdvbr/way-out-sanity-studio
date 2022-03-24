import { ImPacman } from 'react-icons/im'
export default {
    name: 'ad',
    title: 'Ad',
    type: 'document',
    icon: ImPacman,
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'adImage',
            title: 'Ad Image',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            name: 'adImageMobile',
            title: 'Ad Image - Mobile (Only for bottom ads)',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
            title: 'Ad URL',
            name: 'adUrl',
            type: 'url'
          },
        {
            name: 'adCategory',
            title: 'Ad Category',
            type: 'reference',
            to: { type: 'adCategory'}
        },
    ]

}