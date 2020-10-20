import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'admin user',
    email: 'ksachin@mailinator.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'user1',
    email: 'user1@mailinator.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'user2',
    email: 'user2@mailinator.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
