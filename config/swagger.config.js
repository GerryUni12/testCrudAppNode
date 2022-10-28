var swaggerJsdoc = require("swagger-jsdoc");
var swaggerUi = require("swagger-ui-express");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Nodejs Rest CRUD API includingSwagger UI",
            version: "0.1.0",
            description:
                "see Readme Github",
            license: "",
            contact: {
                name: "Gerry",
                url: ""
            },
        },
        servers: [
            {
                url: "http://localhost:3000",
            },
        ],
    },
    apis: ["./routes/user.routes.js"],
};

const swaggerSpecs = swaggerJsdoc(options);

exports.swaggerSpecs = swaggerSpecs;
exports.swaggerUi = swaggerUi; 
