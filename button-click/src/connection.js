import { useState, useEffect } from "react";

export default function ChatRoom (){
    useEffect(()=>{
        const connection = CreateConnection();
        connection.connect();
        return ()=>{
            connection.disconnect();
        }

    }, []);
    return(
        <h1>welcome to the chat</h1>
    )
}


function CreateConnection(){
    return {
        connect(){
            console.log('✅ Connecting...');
        },
        disconnect() {
            console.log('❌ Disconnected.');
          }

    }
}