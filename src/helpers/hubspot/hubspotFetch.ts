import { retryOperation } from "../retry/retryOperation"

export const fetchDataFromHubSpot = async <TResponse>(
    fetchFunc: () => Promise<TResponse>,
    description: string
): Promise<TResponse> => {
    const fetch = async () => {
        return await fetchFunc()
    }
    return retryOperation(fetch, description)
}
