import ChatComponent from "@/components/ChatComponent";

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-br from-black to-gray-900 flex justify-center items-center relative">
      <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        <div className="bg-gray-900 p-4 border-b border-gray-700">
          <h1 className="text-2xl font-bold text-yellow-500">Nebula Voyage - AI Chat</h1>
          {/* <p className="text-gray-400 text-sm">Powered by Deepseek via OpenRouter</p> */}
        </div>
        <div className="p-4">
          <ChatComponent />
        </div>
      </div>
    </div>
  );
}
