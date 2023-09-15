import { winstonLogger } from "../../services/logger"

const pRetry = require("p-retry")

// Will be super nice to use the latest version of p-Retry
// I get errors on the import for the ESM so I went to a lower version
export const retryOperation = <T>(operation: () => Promise<T>, operationName: string) => {
    return pRetry(operation, {
        onFailedAttempt: (error: any) => {
            winstonLogger.warn(
                `${operationName} attempt ${error.attemptNumber} failed. Reason: ${error.message}. ${error.retriesLeft} retries left.`
            )
        },
        retries: 10,
    })
}
