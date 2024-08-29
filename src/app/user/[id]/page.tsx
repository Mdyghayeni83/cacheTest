'use client'
import * as React from 'react';
import Card, { CardProps } from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Box, styled } from '@mui/material';
import imageuser from "@/assets/images/images.png"
import { TextField, Grid } from '@mui/material';
import Image from 'next/image';
import Input from '@/components/Input'

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
        id: "25",
        text: "text tasks",
        assignee: {
            name: "assignee name",
            id: "assignee name",
            img: "assigne image"
        }
    }]
}



const PageUser = styled(Card)<CardProps>(({ theme }) => ({
    '& .MuiTypography-h5': {
        margin: "15px",

    }
}));



export default function page() {
    return (
        <div>
            <Card sx={{ margin: 'auto', maxWidth: "700px", height: "450px", mx: "auto", display: "flex" }}>
                <CardContent>
                    <Box sx={{display:"flex", gap:"12px"}}>
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
                    <Grid container spacing={2} sx={{mt:"20px"}} >
                        <Grid item xs={12} lg={6}>
                            <Input defaultValue={user.firstname} label="firstname" size='small' sx={{width:1, mx:0}}></Input>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Input defaultValue={user.lastname} label="firstname" size='small' sx={{width:1, mx:0}}></Input>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Input defaultValue={user.phone} label="phone" size='small' sx={{width:1, mx:0}}></Input>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

        </div>
    )
}
