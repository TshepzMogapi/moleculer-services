const { ServiceBroker } = require("moleculer");

const ApiGateway = require("moleculer-web");

const brokerNode1 = new ServiceBroker({
    nodeID: "node-1",
    transporter: "NATS"
});

brokerNode1.createService({
    name: 'gateway',
    mixins: [ApiGateway],
    settings: {
        routes: [
            {
                aliases: {
                    "GET /projects": "projects.listProjects",
                    "GET /clients": "clients.listClients",
                    "GET /todos": "todos.listTodos"
                }
            }
        ]
    }
});

const brokerNode2 = new ServiceBroker({
    nodeID: "node-2",
    transporter: "NATS"
});

brokerNode2.createService({
    name: "projects",
    actions: {
        listProjects(ctx) {
            return [
                { name: "Project gorilla", clientId: 1 },
                { name: "Project Build Mol-Service", clientId: 2 }
            ]
        },
        listClientProjects(ctx) {
            return [
                { name: "Project gorilla", clientId: 1 }
            ]
        }
    }
});

const broker3 = new ServiceBroker({
    nodeID: "node-3",
    transporter: "NATS"
});

broker3.createService({
    name: "clients",
    actions: {
        listClients(ctx) {
            return [
                { name: "Qwerty Key" },
                { name: "Underscore Pole" }
            ]
        }
    }
});

const broker4 = new ServiceBroker({
    nodeID: "node-4",
    transporter: "NATS"
});

broker4.createService({
    name: "todos",
    actions: {
        listTodos(ctx) {
            return [
                { name: "Set up environments" },
                { name: "Write Unit tests" },
                { name: "Deploy app to production" },
                { name: "Deploy app to QA" },
                { name: "Monitor environments" }
            ]
        }
    }
});

Promise.all([brokerNode1.start(), brokerNode2.start(), broker3.start(), broker4.start()])