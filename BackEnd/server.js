const fastify = require('fastify')({
  logger: true
})

const UserRoutes = require('./Routes/UserRoutes');
const StatisticRoutes  = require('./Routes/StatisticRoutes');

fastify.register(UserRoutes);
fastify.register(StatisticRoutes);

// Run the server!
fastify.listen(4000, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})