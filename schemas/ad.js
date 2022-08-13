import { ImPacman } from 'react-icons/im'
export default {
    name: 'ad',
    title: 'Ad',
    type: 'document',
    description: 'Remove old ads from the list you dont want to display',
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
            title: 'Ad Image - Mobile',
            type: 'image',
            options: {
              hotspot: true,
            },
            description: 'Only for bottom ads'
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
            to: { type: 'adCategory' },
            description: 'Select between side ad and bottom ad'
        },
    ]

}