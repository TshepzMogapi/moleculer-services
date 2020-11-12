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
                        "GET projects": "projects.listProjects",
                        "GET projects/client/:id": "projects.listClientProjects",
                        "GET clients": "clients.listClients",
                        "GET clients/active-projects": "clients.listActiveProjects",
                    }
                }
            ]
        }
    })
}
