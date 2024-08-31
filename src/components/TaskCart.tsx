import { Box, Card, CardContent, CardHeader, Collapse, Typography } from '@mui/material';
import React from 'react'
import imageuser from '@/assets/images/images.png'
import Image from 'next/image';
type Task = {
    id: string;
    name: string;
    text: string;
    assignee: { name: string, id: string, image: string }
};

type Expanded = boolean;

type HandleExpandClick = () => void;

type TaskCardProps = {
    task: Task;
    expanded: Expanded;
    handleExpandClick: HandleExpandClick;
};



const TaskCard: React.FC<TaskCardProps> = ({ task, expanded, handleExpandClick }) => (
    <Card
        sx={{ marginBottom: 2, cursor: 'pointer' }}
        onClick={handleExpandClick}
    >
        <CardContent sx={{width:"100%"}}>
            <Box sx={{display:"flex", justifyContent:"space-between",width:"100%"}}>
                <Box sx={{ display: "flex", gap: "12px" }}>
                    <Box sx={{ borderRadius: "50%", overflow: "hidden", width: "50px", height: "50px" }}>
                        <Image src={imageuser} alt='image user' width={50} height={50} ></Image>
                    </Box>
                    <Box>
                        <Typography variant="body1" component="div" gutterBottom margin={0}>
                            User Details
                        </Typography>
                        <Typography>
                            {task.id}
                        </Typography>
                    </Box>
                </Box>
                <Box>
                    <Typography>{task.name}</Typography>
                </Box>
            </Box>

        </CardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
                <Typography paragraph>{task.text}</Typography>
                <Typography paragraph>Status: {task.assignee.id}</Typography>
                <Typography paragraph>Due Date: {task.assignee.image}</Typography>
            </CardContent>
        </Collapse>
    </Card>
);

export default TaskCard

