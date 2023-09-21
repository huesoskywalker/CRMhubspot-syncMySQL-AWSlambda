import { APIGatewayEvent, Callback, Context, Handler } from "aws-lambda"
import { syncContacts } from "./helpers/sync/syncContacts"
import { winstonLogger } from "./services/logger"
import { searchOwnerContacts } from "./helpers/search/searchOwnerContacts"

const handler: Handler = async ({
    event,
    context,
    callback,
}: {
    event: APIGatewayEvent
    context: Context
    callback: Callback
}): Promise<void> => {
    try {
        // In here pass the function we would like to sync or search for the dashboard metrics
        // example:
        // await syncContacts()
        // or:
        // await searchOwnerContacts()

        callback(null, {
            statusCode: 200,
            body: JSON.stringify({ message: "Success " }),
        })
    } catch (error: unknown) {
        if (error instanceof Error) {
            winstonLogger.error("Error in handler", {
                error: error.message,
                type: error.name,
                stack: error.stack,
            })
            callback(error, null)
        } else {
            callback(new Error(`Unknown error occurred`), null)
        }
    }
}
