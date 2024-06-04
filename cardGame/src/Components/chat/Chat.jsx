import { Box, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { ENDPOINT } from "../../utils/constants";

export default function Chat() {

    const [chat, setChat] = useState([]);
    const [newChat, setNewChat] = useState("");

    const sendChat = async (message) => {
        try {
            console.log('sending chat');
            const response = await axios.post(`${ENDPOINT}/chat`, { message });

            const { data } = response;

            if (data && setNewChat !== "") {
                console.log('chat sent', data);
                setChat(data);
                setNewChat("");
            }
        } catch (error) {
            window.alert(`Error: ${error.message}`);
        }
    };

    const getChat = async () => {
        try {
            const response = await axios.get(`${ENDPOINT}/chat`)
            const { data } = response
            if (data) {
                setChat(data)
            }
        } catch (error) {

        }
    }

    const handleInputChange = (event) => {
        setNewChat(event.target.value);
    };

    useEffect(() => {
        console.log(newChat);
    }, [newChat])

    useEffect(() => {
        getChat()
    }, [])

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
