import type {IncomingMessage, ServerResponse} from 'http';
import * as url from "url";

export default async (req: IncomingMessage, res: ServerResponse) => {

    let data = {data: [{data: ""}]}

        data = await $fetch("https://jsonplaceholder.typicode.com/todos/")
    
        return data;
}
