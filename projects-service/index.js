const { ServiceBroker } = require("moleculer");
const projectSchema = require('./services/projects.service');

const broker = new ServiceBroker({
    logger: true,
    transporter: "NATS"
});

broker.createService(projectSchema);
broker.start();