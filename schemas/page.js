export default {
    name: 'page',
    type: 'document',
    title: 'Page',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            option: {
                source: 'title',
                maxLength: 96,
            }
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent',
        },
    ]
}