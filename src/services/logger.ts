import { Logger } from "winston"
import { CONFIG } from "../config/config"

const winston = require("winston")

export const winstonLogger: Logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    transports: [
        new winston.transports.File({ filename: "error.log", level: "error" }),
        new winston.transports.File({ filename: "warn.log", level: "warn" }),
    ],
})

if (CONFIG.STATUS !== "production") {
    winstonLogger.add(
        new winston.transports.Console({
            format: winston.format.simple(),
        })
    )
}
