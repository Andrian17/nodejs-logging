import winston from "winston";
import TransportStream from "winston-transport";
import DailyRotateFile from "winston-daily-rotate-file";

const logger = winston.createLogger({
    level: "info",
    transports: [
        new DailyRotateFile({
            level: "error",
            filename: "app-exception-%DATE%.log",
            zippedArchive: true,
            maxSize: "100m",
            maxFiles: "14d",
            handleExceptions: true
        }),
        new winston.transports.Console({}),
        new winston.transports.File({
            handleExceptions: true,
            filename: "exception.log"
        })
    ]
});

halloBre();
halloBre2();
halloBre3();