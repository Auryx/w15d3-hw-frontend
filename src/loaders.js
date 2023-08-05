import { baseUrl } from "./base_url";

export const cheeseLoader = async () => {
    const response = await fetch(`${baseUrl}/cheese`)
    const cheese = await response.json()
    console.log(cheese)
    return cheese
}