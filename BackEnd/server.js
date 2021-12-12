const fastify = require('fastify')({
  logger: true
})

const dotenv = require('dotenv');
const env = process.env.NODE_ENV || 'localhost'
dotenv.config({path:`.env.${env}`})

const UserRoutes = require('./Routes/UserRoutes');
const StatisticRoutes  = require('./Routes/StatisticRoutes');

fastify.register(UserRoutes);
fastify.register(StatisticRoutes);

// Run the server!
fastify.listen(process.env.BACKEND_PORT,process.env.BACKEND_HOST, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})