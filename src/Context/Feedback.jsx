import React from 'react'

const Feedback = () => {
  const [message, setMessage] = useState("");
  return (
    <div>
      <h2>Feedback</h2>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      <button>Send</button>
    </div>
  );
}

export default Feedback

