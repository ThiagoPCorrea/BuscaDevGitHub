const StatisticService = require("../Service/StatisticService")
const StatisticModel = require("../dto/StatisticModel");

async function StatisticRoutes(fastify, options) {
    const statisticService = new StatisticService();
    
    fastify.get('/statistic', async (request, reply) => {
        return statisticService.GetStatisticData(Object.assign(new StatisticModel,request.body));
    })

    fastify.post('/statistic/create', async (request, reply) => {
        return statisticService.CreateStatistic(Object.assign(new StatisticModel,request.body));
    })

}

module.exports =  StatisticRoutes;