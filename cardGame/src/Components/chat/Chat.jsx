import { Box, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Chat() {

    const [chat, setChat] = useState([]);
    const [newChat, setNewChat] = useState("");

    const sendChat = async (message) => {
        try {
            console.log('sending chat');
            const response = await axios.post('http://localhost:3001/chat', { message });

            const { data } = response;

            if (data) {
                console.log('chat sent', data);
                setChat( data );
                setNewChat(""); 
            }
        } catch (error) {
            window.alert(`Error: ${error.message}`);
        }
    };

    const handleInputChange = (event) => {
        setNewChat(event.target.value);
    };

    useEffect(() => {
        console.log(newChat);
    }, [newChat])

    return (
        <Box>
            <Box sx={{ border: '1px solid green', minHeight: 50 }}>
                {chat.length > 0
                    ? chat.map((message, i) => (
                        <h5 key={i}>{message}</h5>
                    ))
                    : null}
            </Box>
            <Box sx={{ display: "flex", border: "1px solid red" }}>
                <TextField 
                    id="newChat" 
                    label="Send message" 
                    variant="standard" 
                    value={newChat} 
                    onChange={handleInputChange} 
                />
                <Button onClick={() => sendChat(newChat)}>Send</Button>
            </Box>
        </Box>
    );
}
