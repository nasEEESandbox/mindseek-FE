import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowLeft, ArrowRight, Clock } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import Symptoms from "@/components/symptoms";
import Chat from "@/components/chat";
import Response from "@/components/response";

export default function Consultation() {
  const [inputMessage, setInputMessage] = useState("");
  const [conversation, setConversation] = useState([]);
  const [diagnosisData, setDiagnosisData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showSidebar, setShowSidebar] = useState(false);

  // Update currentTime every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Fetch diagnosis summary for patient_id = 1
  const fetchDiagnosisData = async () => {
    try {
      const response = await fetch("https://rayhan.id:8080//diagnosis_summary?patient_id=1");
      const data = await response.json();
      setDiagnosisData(data);
    } catch (error) {
      console.error("Error fetching diagnosis summary:", error);
    }
  };

  const sendMessage = async () => {
    if (!inputMessage || loading) return;
    // Append the user's message.
    setConversation((prev) => [
      ...prev,
      { sender: "You", message: inputMessage},
    ]);
    setLoading(true);

    const payload = {
      message: inputMessage,
      patient_id: 1,
      patient_name: "John Doe",
      psychiatrist_name: "dr. Al-Farabi",
    };

    try {
      const response = await fetch("https://rayhan.id:8080/api/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      // Append the chatbot's response, including retrieval_info.
      setConversation((prev) => [
        ...prev,
        {
          sender: "Chatbot",
          message: data.answer,
          retrieval_info: data.retrieval_info,
        },
      ]);
    } catch (error) {
      console.error("Error sending message:", error);
      setConversation((prev) => [
        ...prev,
        { sender: "Chatbot", message: "Sorry, an error occurred." },
      ]);
    } finally {
      setInputMessage("");
      setLoading(false);
      fetchDiagnosisData();
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] p-6 space-y-4">
      {/* Header */}
      <div className="flex justify-between border-b border-zinc-300 pb-3">
        <div className="flex gap-3">
          <Button 
            size="icon" 
            className="cursor-pointer" 
            onClick={() => console.log("Navigate home triggered")}
          >
            <ArrowLeft />
          </Button>
          <Avatar>
            <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0r9YAdkCAZqbishkx5Y0ehWQm89BnUH01qA&s" />
            <AvatarFallback>CA</AvatarFallback>
          </Avatar>
          <div className="text-left text-sm">
            <p className="font-bold">John Doe</p>
            <p>Patient ID : 1</p>
          </div>
          <Button 
            variant="outline" 
            className="cursor-pointer" 
            onClick={() => console.log("View Patient Data triggered")}
          >
            View Patient Data
          </Button>
        </div>
        <div className="flex text-sm gap-3 items-center">
          <div className="text-right">
            <p className="font-bold">Next Patient</p>
            <p>Rina Wijaya (10.30)</p>
          </div>
          <Clock />
          <div className="h-10 border-l border-gray-400"></div>
          <div className="text-left">
            <p className="font-bold">
              {currentTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}
            </p>
            <p>{currentTime.toLocaleDateString()}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex gap-2 h-[79vh] relative">
        {/* Chat Area */}
        <div className={`transition-all duration-300 ${showSidebar ? "basis-3/4" : "w-full"}`}>
          <div className="bg-primary rounded-t-lg text-zinc-50 p-2">
            <p>MindSeek Consultation Assistant</p>
          </div>
          <ScrollArea className="border-x-1 text-base border-zinc-300 h-[73vh]">
            <div className="flex flex-col space-y-4 p-4">
              {conversation.map((item, idx) =>
                item.sender === "You" ? (
                  <Chat key={idx} message={item.message} />
                ) : (
                  <Response key={idx} message={item.message} retrieval_info={item.retrieval_info} />
                )
              )}
            </div>
          </ScrollArea>
          <div className="relative w-full">
            <Input
              disabled={loading}
              className="w-full pr-12 rounded-none rounded-b-lg text-sm h-10"
              placeholder="Write consultation results here..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />
            <Button
              disabled={loading}
              className="cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7"
              size="icon"
              onClick={sendMessage}
            >
              {loading ? <span className="animate-spin">⏳</span> : <ArrowUp />}
            </Button>
          </div>
        </div>

        {/* Toggle Sidebar Button */}
        <Button
          variant="outline"
          size="lg"
          className="cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-3 text-lg bg-gray-300 shadow-lg hover:bg-fuchsia-200"
          onClick={() => setShowSidebar((prev) => !prev)}
          title="Toggle Diagnostic Sidebar"
        >
          {showSidebar ? <ArrowRight /> : <ArrowLeft />}
        </Button>

        {/* Diagnostic Sidebar with Smooth Show/Hide */}
        <div
          className={`transition-all duration-300 ease-in-out overflow-hidden ${
            showSidebar ? "w-1/4 opacity-100" : "w-0 opacity-0"
          }`}
        >
          <div className="bg-zinc-800 rounded-t-lg text-zinc-50 p-2">
            <p>Diagnostic Wizard</p>
          </div>
          <div className="p-4 border rounded-b-lg border-zinc-300 text-sm text-left h-full overflow-y-auto">
            {diagnosisData && diagnosisData.hasData ? (
              diagnosisData.diagnosis_summary.map((diagnosis, idx) => (
                <div key={idx} className="pb-4 border-b-2 border-zinc-300 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="font-bold">{diagnosis.name}</p>
                      <p>{diagnosis.cluster}</p>
                    </div>
                    <div className="bg-primary p-2 rounded-lg w-fit h-fit text-zinc-50 font-bold">
                      {diagnosis.code}
                    </div>
                  </div>
                  <p>{diagnosis.description}</p>
                  <ScrollArea className="text-zinc-50 pt-2 flex-1 overflow-y-auto">
                  <div className="space-y-2">
                      {diagnosis.symptoms.map((symptom, i) => (
                        <Symptoms
                          key={i}
                          message={symptom.message}
                          isGood={symptom.isGood}
                        />
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              ))
            ) : (
              <div className="flex items-center justify-center h-full text-zinc-500">
                No data available
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
