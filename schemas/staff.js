import { BsPersonFill } from 'react-icons/bs';
export default {
  name: 'staff',
  title: 'Staff (🚫 Do not add new names, only edit existing names 🚫)',
  type: 'document',
  icon: BsPersonFill,
  fields: [
    {
      name: 'staffName',
      title: 'Staff Name',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
  ],
};
