const { ServiceBroker } = require("moleculer");
const gatewayService = require('./services/api.service');

const broker = new ServiceBroker({
    logger: true,
    transporter: "NATS"
});

gatewayService(broker);

broker.start();