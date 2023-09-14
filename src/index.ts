// import { APIGatewayEvent, Callback, Context, Handler } from "aws-lambda"

const handler = async (): // event: APIGatewayEvent,
// context: Context,
// callback: Callback
Promise<void> => {
    try {
        console.log(`start Sync`)
        // await syncContacts()
        // callback(null, {
        //     statusCode: 200,
        //     body: JSON.stringify({ message: "Success " }),
        // })
    } catch (error: unknown) {
        if (error instanceof Error) {
            // winstonLogger.error("Error in handler", {
            //     error: error.message,
            //     type: error.name,
            //     stack: error.stack,
            // })
            // callback(error, null)
        }
        // else {
        //     callback(new Error(`Unknown error occurred`), null)
        // }
    }
}

handler()

// module.exports = {
//     handler,
// }
