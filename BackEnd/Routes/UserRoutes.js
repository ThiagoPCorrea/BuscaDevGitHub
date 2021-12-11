const UserModel = require("../dto/UserModel");
const UserService = require("../Service/UserService");

async function UserRoutes(fastify, options) {
    const userService = new UserService();

    fastify.post('/login', async (request, reply) => {
        return userService.Login(new UserModel(request.body));
    })

    fastify.post('/create', async (request, reply) => {
        return userService.CreateUser(new UserModel(request.body));
    })
}

module.exports = UserRoutes;