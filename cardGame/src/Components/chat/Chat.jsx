import { Box, TextField, Button } from "@mui/material";
import { useEffect, useState, useRef } from "react";

export default function Chat() {
    const [player, setPlayer] = useState({ name: "" })
    const [newChat, setNewChat] = useState("");
    const [messages, setMessages] = useState([]);
    const ws = useRef(null);

    const handleInputChange = (event) => {
        setNewChat(event.target.value);
    };

    const handlePlayerName = (event) => {
        setPlayer({ name: event.target.value })
    }

    useEffect(() => {
        // Establecer la conexión WebSocket cuando el componente se monta
        ws.current = new WebSocket('ws://localhost:3001/chat');

        ws.current.onopen = () => {
            console.log('WebSocket connection opened');
        };

        ws.current.onmessage = (event) => {
            const receivedMessage = JSON.parse(event.data);
            setMessages(prevMessages => [...prevMessages, receivedMessage]);
        };

        ws.current.onclose = () => {
            console.log('WebSocket connection closed');
        };

        ws.current.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        // Limpiar la conexión WebSocket cuando el componente se desmonta
        return () => {
            if (ws.current) {
                ws.current.close();
            }
        };
    }, []);

    const sendChat = async () => {
        if (ws.current && newChat) {
            const message = {
                player: player.name,
                content: newChat
            };
            ws.current.send(JSON.stringify(message));
            setNewChat("");
        }
    };

    useEffect(() => {
        console.log(player.name);
    }, [player])

    return (
        <Box>
            <Box sx={{ display: "flex", border: "1px solid red", padding: "10px", flexDirection: "column", maxHeight: "300px", overflowY: "auto" }}>
                {messages.map((msg, index) => (
                    <Box key={index} sx={{ margin: "5px 0" }}>
                        <strong>{msg.player}</strong>: {msg.content}
                    </Box>
                ))}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                <TextField
                    id="newChat"
                    label="Send message"
                    variant="standard"
                    value={newChat}
                    onChange={handleInputChange}
                    sx={{ flexGrow: 1, marginRight: "10px" }}
                />
                <Button onClick={sendChat} variant="contained">Send</Button>
            </Box>
            <TextField
                placeholder="Player name"
                id="player"
                variant="standard"
                value={player.name}
                onChange={ handlePlayerName }
            >
            </TextField>
        </Box>
    );
}
