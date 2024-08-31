interface Addres {
    city: String,
    province: string
}

interface Assignee {
    name: string,
    id: number | null,
    image: string
}


interface Tasks {
    name: string,
    id: number | null,
    text: string,
    assignee: Assignee
}

export interface User {
    firstname: string,
    lastname: string,
    id: number | null,
    image: string,
    address: Addres,
    phone: string,
    tasks: Tasks[]
}
