module.exports = {
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
}