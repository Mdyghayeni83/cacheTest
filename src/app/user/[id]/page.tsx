
import * as React from 'react';
import Card, { CardProps } from '@mui/material/Card';
import { styled } from '@mui/material';
import UserDetail from '@/components/UserDetail';

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

interface User {
    firstname: string,
    lastname: string,
    id: number | null,
    image: string,
    address: Addres,
    phone: string,
    tasks: Tasks[]
}

const user:User = {
    firstname: "danial",
    lastname: "khoshniyat",
    id: 50,
    image: "./",
    address: {
        city: "mashad",
        province: "str"
    },
    phone: "091550106751",
    tasks: [{
        name: "footer",
        id: 5,
        text: "text tasks",
        assignee: {
            name: "assignee name",
            id: 85,
            image: "assigne image"
        }
    },
    {
        name: "footer",
        id: 25,
        text: "text tasks",
        assignee: {
            name: "assignee name",
            id:63,
            image: "assigne image"
        }
    }]
}

export default function page() {

    return (
        <div>
             <UserDetail user={user}></UserDetail>
        </div>
    )
}
