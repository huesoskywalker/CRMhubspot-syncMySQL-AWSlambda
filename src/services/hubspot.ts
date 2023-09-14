import * as hubspot from "@hubspot/api-client"
import { CONFIG } from "../config/config"

const accessToken = CONFIG.HUBSPOT_ACCESS_TOKEN
export const hubspotClient = new hubspot.Client({
    accessToken: accessToken,
    defaultHeaders: {
        "Content-Type": "application/json",
    },
})
