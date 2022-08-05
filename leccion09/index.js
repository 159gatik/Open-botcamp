const winston = require("winston");

const logger = winston.createLogger({
    level: "error",
    format: winston.format.json(),
    defaultMeta: { service: "user-service" },
    transports: [
        new winston.transports.File({ filename: "error.log", level: "error" }),
    ],
});

function gestionarError() {
    throw new Error("Sufrimos un error");
}

try {
    gestionarError();
} catch (e) {
    logger.error("ERROR inesperado");
}