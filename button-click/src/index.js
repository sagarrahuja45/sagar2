import React from 'react';
import ReactDOM from 'react-dom/client';
// import Board from './tictac';
import ExRef from './useRef';
import Page from './app';
import Art from './art';
import VideoApp from './exeffect';
import "./styles.css";
import Accordion from './main';
import Gallery from './sculpturelist';
import ChatRoom from './connection';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
    <ChatRoom />
    </React.StrictMode>
);