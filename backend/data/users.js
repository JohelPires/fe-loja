import bcryptjs from "bcryptjs"

const users = [
    {
        nome: 'Admin',
        email: 'admin@example.com',
        password: bcryptjs.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        nome: 'Johel Pires',
        email: 'johelpires@gmail.com',
        password: bcryptjs.hashSync('123456', 10),
    },
    {
        nome: 'Joe Satriani',
        email: 'satriani@example.com',
        password: bcryptjs.hashSync('123456', 10),
    },
]

export default users