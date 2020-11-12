const http = require('superagent');

const listActiveProjects = async() => {
    const activeProjects = await http.get(
        'http://localhost:3000/api/projects/client/4'
    ).send()

    return activeProjects;
    // return [1,2,3]
};

module.exports = {
    name: "clients",
    actions: {
        listClients(ctx) {
            return [
                { name: "Qwerty Key" },
                { name: "Underscore Pole" }
            ]
        },
        listActiveProjects
    }
}