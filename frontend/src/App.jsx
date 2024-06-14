import { useEffect } from 'react'
import socket from './socket'


function App() {

  useEffect(() => {
    console.log('useEffect called');

    function handleConnect() {
      console.log('connected to the server')
      socket.emit('message', 'frontend sends nf6.');
    }
    function handleMessage(message) {
      console.log('message from server' + message)
    }
    socket.on('connect', handleConnect)
    socket.on('message', handleMessage)
      
    console.log('useEffect finished');

      return () => {
        console.log('clinning up')
        socket.off('connect');
        socket.off('message');
      };
    
  }, [])

  return (
    <div>Hi</div>
  )
}

export default App
