import { ChatEngine } from 'react-chat-engine';

import './App.css';
import ChatFeed from './components/ChatFeed';
const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="1b10bd3f-22ca-463c-aa73-c3c3ec598a41"
            userName="SecondUser"
            userSecret="seconduser"
            renderChatFeed={(chatAppProps) => <ChatFeed {... chatAppProps} />}
        />
    )
}

export default App;