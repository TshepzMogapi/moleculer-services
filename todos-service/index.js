const { ServiceBroker } = require("moleculer");
const todosSchema = require("./services/todos.service");

const broker = new ServiceBroker({
    logger: true,
    transporter: "NATS"
});

broker.createService(todosSchema);
broker.start();