import { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleSend = () => {
    if (!input) return;
    setMessages([...messages, "You: " + input, "Bot: (AI reply here)"]);
    setInput("");
  };

  return (
    <div className="p-4 border rounded-md w-full max-w-md mx-auto">
      <h2 className="text-lg font-bold mb-2">LegalClear Chatbot</h2>

      {/* File Upload */}
      <input
        type="file"
        accept=".pdf,.docx,.txt"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="mb-2"
      />
      {file && <p className="text-sm">Uploaded: {file.name}</p>}

      {/* Chat Window */}
      <div className="h-48 overflow-y-auto border p-2 mb-2 bg-gray-50 rounded">
        {messages.map((msg, i) => (
          <p key={i} className="text-sm">{msg}</p>
        ))}
      </div>

      {/* Input Box */}
      <div className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about your document..."
          className="flex-1 border rounded p-2"
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}
