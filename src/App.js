import { ChatEngine } from 'react-chat-engine';

import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const projectID='1b10bd3f-22ca-463c-aa73-c3c3ec598a41';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />;
  
    return (
      <ChatEngine
        height="100vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    );
  };
  
  // infinite scroll, logout, more customizations...
  
  export default App;
  