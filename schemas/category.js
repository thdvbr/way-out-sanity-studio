export default {
  name: 'category',
  title: 'Category (🔒 Read-only)',
  type: 'document',
  readOnly: ({currentUser}) => {
    return !(currentUser.roles.find(({name}) => name === 'administrator'))
  },
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: '🔒 Read-only — contact dev to make changes.',
    },
  ],
}
