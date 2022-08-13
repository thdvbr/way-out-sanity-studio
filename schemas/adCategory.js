export default {
    name: 'adCategory',
    title: 'Ad Category',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
  ],
  readOnly: ({currentUser}) => {
    return !(currentUser.roles.find(({name}) => name === 'administrator'))
  },
  }
  