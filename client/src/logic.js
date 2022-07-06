const [messages, setMessages] = useState([]);
  const inputRef = useRef(null);

  const joinRoom = ()=>{
    socket.emit("joinRoom", "React");
    console.log("joined room: React" );
  }

  const sendHandler = ()=>{
    
    const data = {
      auther: "Hamada",
      message: inputRef.current.value,
      room: "React",
      time: new Date().getHours().toString().padStart(2, '0') + ":" + new Date().getMinutes().toString().padStart(2 ,'0'),
      date: new Date(Date.now())
    }
    inputRef.current.value = "";
    socket.emit("messaging", data );
    setMessages(prev => [...prev, data]);
    
  }

  useEffect(()=>{
    socket.on("messaging", (msg)=>{
      setMessages(prev => [...prev, msg]);
      console.log(messages);
    })
  },[socket])