const { ServiceBroker } = require('moleculer');
const clientSchema = require('./services/clients.service');

const broker = new ServiceBroker({
    logger: true,
    transporter: "NATS"
});

broker.createService(clientSchema);

broker.start();