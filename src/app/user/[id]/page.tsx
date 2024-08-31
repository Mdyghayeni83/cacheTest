'use client'
import * as React from 'react';
import { useState } from 'react';
import Card, { CardProps } from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Box, CardHeader, Collapse, styled } from '@mui/material';
import imageuser from "@/assets/images/images.png"
import { TextField, Grid } from '@mui/material';
import Image from 'next/image';
import Input from '@/components/Input';
import TaskCart from '@/components/TaskCart'
// import { useSelector, useDispatch } from 'react-redux';
import {setDatailuser} from '@/redux/slice/userslice'

type Statetype = {
    state : any,
    user: {
        firstname: string,
    lastname: string,
    id: string,
    image: string,
    address: {
        city: string,
        province: string
    },
    phone: string,
    tasks: {
        name: string,
        id: string,
        text: string,
        assignee: {
            name: string,
            id: string,
            image: string
        }
    }[]
    }
}

// const user1 = useSelector<Statetype>(state=>state.user)
// console.log(user1)

// const dispatch = useDispatch()

// dispatch(setDatailuser({
//     firstname: "danial",
//     lastname: "khoshniyat",
//     id: "50",
//     image: "./",
//     address: {
//         city: "mashad",
//         province: "str"
//     },
//     phone: "091550106751",
//     tasks: [{
//         name: "footer",
//         id: "5",
//         text: "text tasks",
//         assignee: {
//             name: "assignee name",
//             id: "assignee name",
//             image: "assigne image"
//         }
//     },
//     {
//         name: "footer",
//         id: "25",
//         text: "text tasks",
//         assignee: {
//             name: "assignee name",
//             id: "assignee name",
//             image: "assigne image"
//         }
//     }]
// }))
const user = {
    firstname: "danial",
    lastname: "khoshniyat",
    id: "50",
    image: "./",
    address: {
        city: "mashad",
        province: "str"
    },
    phone: "091550106751",
    tasks: [{
        name: "footer",
        id: "5",
        text: "text tasks",
        assignee: {
            name: "assignee name",
            id: "assignee name",
            image: "assigne image"
        }
    },
    {
        name: "footer",
        id: "25",
        text: "text tasks",
        assignee: {
            name: "assignee name",
            id: "assignee name",
            image: "assigne image"
        }
    }]
}



const PageUser = styled(Card)<CardProps>(({ theme }) => ({
    '& .MuiTypography-h5': {
        margin: "15px",

    }
}));








export default function page() {
    const [expandedCard, setExpandedCard] = useState<string | null>(null);
    const handleExpandClick = (id: string) => {
        setExpandedCard(expandedCard === id ? null : id);
    };
    return (
        <div>
            <Card sx={{ maxWidth: "820px", height: "350px", mx: "auto", display: "flex" }}>
                <CardContent>
                    <Box sx={{ display: "flex", gap: "12px" }}>
                        <Box sx={{ borderRadius: "50%", overflow: "hidden", width: "50px", height: "50px" }}>
                            <Image src={imageuser} alt='image user' width={50} height={50} ></Image>
                        </Box>
                        <Box>
                            <Typography variant="body1" component="div" gutterBottom margin={0}>
                                User Details
                            </Typography>
                            <Typography>
                                {user.id}
                            </Typography>
                        </Box>
                    </Box>
                    <Grid container spacing={2} sx={{ mt: "20px" }} >
                        <Grid item xs={12} lg={6}>
                            <Input defaultValue={user.firstname} label="firstname" size='small' sx={{ width: 1, mx: 0 }}></Input>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Input defaultValue={user.lastname} label="firstname" size='small' sx={{ width: 1, mx: 0 }}></Input>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Input defaultValue={user.phone} label="phone" size='small' sx={{ width: 1, mx: 0 }}></Input>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Input defaultValue={user.address.city} label="city" size='small' sx={{ width: 1, mx: 0 }}></Input>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Input defaultValue={user.address.province} label="province" size='small' sx={{ width: 1, mx: 0 }}></Input>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            {/* ................... task user ...................................... */}
            <Card sx={{ mx: 'auto', mt: "45px", maxWidth: "820px", height: "350px" }}>

                {user.tasks.map(task => (
                   
                        <CardContent >
                            
                                {/* <Box sx={{ display: "flex", gap: "12px" }}>
                                    <Box sx={{ borderRadius: "50%", overflow: "hidden", width: "50px", height: "50px" }}>
                                        <Image src={imageuser} alt='image user' width={50} height={50} ></Image>
                                    </Box>
                                    <Box>
                                        <Typography variant="body1" component="div" gutterBottom margin={0}>
                                            {task.name}
                                        </Typography>
                                        <Typography>
                                            {task.id}
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                    <Typography>{task.assignee.name}</Typography>
                                </Box> */}
                               
                                    <TaskCart
                                        key={task.id}
                                        task={task}
                                        expanded={expandedCard === task.id}
                                        handleExpandClick={() => handleExpandClick(task.id)}
                                    />
                            
                        </CardContent>

                    
                ))} 

            </Card>


        </div>
    )
}
