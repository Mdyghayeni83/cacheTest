'use client'
import { Box, Card, CardContent, CardProps, Grid, Typography, styled } from '@mui/material'
import React, { ReactNode, useEffect, useState } from 'react'
import Image from 'next/image';
import imageuser from "@/assets/images/images.png"
import Input from './Input';
import TaskCard from './TaskCart';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '@/redux/store/store';
import { setDatailuser } from '@/redux/slice/userslice';



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



const initialState: User = {
    firstname: "",
    lastname: "",
    id: null,
    image: "",
    address: {
        city: "",
        province: ""
    },
    phone: "",
    tasks: []
}
const PageUser = styled(Card)<CardProps>(({ theme }) => ({
    '& .MuiTypography-h5': {
        margin: "15px",

    }
}));
export default function UserDetail({ user }: { user: User }) {
    const [expandedCard, setExpandedCard] = useState<string | null>(null);
    const handleExpandClick = (id: string) => {
        setExpandedCard(expandedCard === id ? null : id);
    }

    const user1 = useSelector<IRootState, User>(state=>state.user)
    const [userState, setState] = useState<User>()
    const dispatch = useDispatch()
   useEffect(() => {
    dispatch(setDatailuser(user))
   }, [])
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
                                {user1.id}
                            </Typography>
                        </Box>
                    </Box>
                    <Grid container spacing={2} sx={{ mt: "20px" }} >
                        <Grid item xs={12} lg={6}>
                            <Input value={user1.firstname} label="firstname" size='small' sx={{ width: 1, mx: 0 }}></Input>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Input value={user1.lastname} label="firstname" size='small' sx={{ width: 1, mx: 0 }}></Input>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Input value={user1.phone} label="phone" size='small' sx={{ width: 1, mx: 0 }}></Input>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Input value={user1.address.city} label="city" size='small' sx={{ width: 1, mx: 0 }}></Input>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Input value={user1.address.province} label="province" size='small' sx={{ width: 1, mx: 0 }}></Input>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            {/* ................... task user ...................................... */}
            <Card sx={{ mx: 'auto', mt: "45px",  maxWidth: "820px",display:'flex'}}>
                {user1.tasks.map(task => (
                    <CardContent >
                        <TaskCard
                            key={task.id}
                            task={task}
                            expanded={expandedCard === String(task.id)}
                            handleExpandClick={() => handleExpandClick(String(task.id))}
                        />

                    </CardContent>
                ))}
            </Card>
        </div>
    )
}