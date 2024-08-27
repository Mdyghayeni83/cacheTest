'use client'


import * as React from 'react';
import Card, { CardProps } from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { alpha, styled } from '@mui/material';
import { withTheme } from '@emotion/react';
import { Box } from '@mui/material';


const AppCard = styled(Card)<CardProps>(({ theme }) => ({
    width: "600px",
    height: "250px",
    borderRadius: "30px",
}))

export default function MediaCard({children, ...other}: CardProps) {
    return (
        <AppCard {...other} sx = {{boxShadow:2}}>
            {children}
        </AppCard>
    );
}