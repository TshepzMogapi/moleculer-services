module.exports = {
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
}