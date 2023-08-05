import { baseUrl } from "./base_url";

export const cheesesLoader = async () => {
    const response = await fetch(`${baseUrl}/cheese`)
    const cheese = await response.json()
    console.log(cheese)
    return cheese
}
export const cheeseLoader = async ({params}) => {
    const id = params.id
    const response = await fetch(`${baseUrl}/cheese/${id}`)
    const person = await response.json()
    return person
}