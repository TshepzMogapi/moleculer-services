const Service = require('moleculer').Service

const ApiGateway = require("moleculer-web");

module.exports = (broker) => {
    return new Service(broker, {
        name: 'gateway',
        mixins: [ApiGateway],
        settings: {
            routes: [
                {
                    path: '/api',
                    // ,
                    // whitelist: [
                    //     ""
                    // ]

                    aliases: {
                        "GET projects": "projects.listProjects"
                    }
                }
            ]
        }
    })
}
