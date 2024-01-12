
import winston from "winston";
// const winston = require("winston");

test("Create winston logger test", () => {
    const logger = winston.createLogger({
        level: "debug",
        transports: [
            new winston.transports.Console({})
        ]
    });

    logger.log({ level: "error", message: "Error message" })
    logger.log({ level: "warn", message: "Warn message" })
    logger.log({ level: "info", message: "Info message" })
    logger.log({ level: "http", message: "HTTP message" })
    logger.log({ level: "verbose", message: "Verbose message" })
    logger.log({ level: "debug", message: "Debug message" })
    logger.log({ level: "silly", message: "Silly message" })
});

test("Winston logger shortcut function", () => {
    const logger = winston.createLogger({
        level: "debug",
        transports: [
            new winston.transports.Console({})
        ]
    });
    
    logger.error("Error message")
    logger.warn("Warn message")
    logger.info("Info message")
    logger.http("HTTP message")
    logger.verbose("Verbose message")
    logger.debug("Debug message")
    logger.silly("Silly message")
});

test("Logging with format", () => {
    const logger = winston.createLogger({
        level: "info",
        transports: [
            new winston.transports.Console({})
        ],
        format: winston.format.simple()
    });
    logger.info("Format log");
});

test("Logging with custom format", () => {
    const logger = winston.createLogger({
        level: "info",
        transports: [
            new winston.transports.Console({})
        ],
        format: winston.format.printf(info => {
            return `${new Date()} : ${info.level.toUpperCase()} : ${info.message}`;
        })
    });
    logger.info("new Info Log");
    logger.error("new Error Log");
    logger.warn("new Warn Log");
});

test("Logging with combine format", () => {
    const logger = winston.createLogger({
        level: "info",
        transports: [
            new winston.transports.Console({})
        ],
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            winston.format.json()
        )
    });
    logger.info("new Info Log");
    logger.error("new Error Log");
    logger.warn("new Warn Log");
});

test("Logging with file transport", () => {
    const logger = winston.createLogger({
        level: "info",
        transports: [
            new winston.transports.Console({}),
            new winston.transports.File({
                filename: "application.log"
            }),
            new winston.transports.File({
                filename: "database.log"
            })
        ],
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            winston.format.json()
        )
    });
    logger.info("new Info Log");
    logger.error("new Error Log");
    logger.warn("new Warn Log");
});

test("Logging with file transport level", () => {
    const logger = winston.createLogger({
        level: "info",
        transports: [
            new winston.transports.Console({}),
            new winston.transports.File({
                filename: "application.log"
            }),
            new winston.transports.File({
                level: "error",
                filename: "application-error.log"
            })
        ],
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            winston.format.json()
        )
    });
    logger.info("new Info Log");
    logger.error("new Error Log");
    logger.warn("new Warn Log");
});