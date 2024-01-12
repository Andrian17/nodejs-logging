import winston from "winston";
import TransportStream from "winston-transport";
import DailyRotateFile from "winston-daily-rotate-file";

test("Logging with daily rotate file", () => {
    const logger = winston.createLogger({
        level: "info",
        transports: [
            new DailyRotateFile({
                level: "error",
                filename: "app-%DATE%.log",
                zippedArchive: true,
                maxSize: "100m",
                maxFiles: "14d"
            }),
            new winston.transports.Console({})
        ],
        format: winston.format.combine(
            winston.format.timestamp(),
            winston.format.ms(),
            winston.format.json()
        )
    });

    for (let index = 0; index < 100000; index++) {
        logger.error("new Error Log");
    }
});


test("Create new custom transport", () => {
    class MyTransport extends TransportStream {
        constructor(option) {
            super(option);
        }

        log(info, next) {
            console.log(`${new Date()} : ${info.level.toUpperCase()} : ${info.message}`);
            next();
        }
    }

    const logger = winston.createLogger({
        level: "debug",
        transports: [
            new MyTransport({})
        ]
    })
});


test("Logging Exception", () => {
    
});