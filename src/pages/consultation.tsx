import { Button } from "@/components/ui/button";
import { ArrowUp, ArrowLeft, Clock } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import Symptoms from "@/components/symptoms";
import Chat from "@/components/chat";
import Response from "@/components/response";
import { useNavigate } from "react-router-dom";

export default function Consultation() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-[100vw] h-[100vh] p-6 space-y-4">
        <div className="flex justify-between border-b border-zinc-300 pb-3">
          <div className="flex gap-3">
            <Button size="icon" onClick={() => navigate("/home")}>
              <ArrowLeft />
            </Button>
            <Avatar>
              <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0r9YAdkCAZqbishkx5Y0ehWQm89BnUH01qA&s" />
              <AvatarFallback>CA</AvatarFallback>
            </Avatar>
            <div className="text-left text-sm">
              <p className="font-bold">Budi Santoso</p>
              <p>Patient ID : 123194-7523</p>
            </div>
            <Button variant="outline" onClick={()=>navigate("/patient")}>View Patient Data</Button>
          </div>
          <div className="flex text-sm gap-3 items-center">
            <div className="text-right">
              <p className="font-bold">Next Patient</p>
              <p>Rina Wijaya (10.30)</p>
            </div>
            <Clock />
            <div className="h-10 border-l border-gray-400"></div>
            <div className="text-left">
              <p className="font-bold">10:02:30</p>
              <p>25/04/2025</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 h-[79vh]">
          <div className="basis-2/3">
            <div className="bg-primary rounded-t-lg text-zinc-50 p-2">
              <p>MindSeek Consultation Assistant</p>
            </div>
            <ScrollArea className="border-x-1 text-sm border-zinc-300 h-[73vh]">
              <div className="flex flex-col space-y-4 p-4">
                <Chat
                  message="I have a patient presenting with persistent mood instability,
                  impulsivity, and intense fear of abandonment."
                />
                <Response />
                <Chat
                  message="I have a patient presenting with persistent mood instability,
                  impulsivity, and intense fear of abandonment."
                />
                <Response />
              </div>
            </ScrollArea>
            <div className="relative w-full">
              <Input
                className="w-full pr-12 rounded-none rounded-b-lg text-sm h-10"
                placeholder="Write consultation results here..."
              />
              <Button
                className="absolute right-2 top-1/2 -translate-y-1/2 h-7 w-7"
                size="icon"
              >
                <ArrowUp />
              </Button>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="bg-zinc-800 rounded-t-lg text-zinc-50 p-2">
              <p>Diagnostic Wizard</p>
            </div>
            <div className="p-4 border-1 rounded-b-lg border-zinc-300 text-sm text-left h-full">
              <div className="pb-4 border-b-2 border-zinc-300">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="font-bold">
                      Borderline Personality Disorder (BPD)
                    </p>
                    <p>Personality Disorder (Cluster B)</p>
                  </div>
                  <div className="bg-primary p-2 rounded-lg w-fit h-fit text-zinc-50 font-bold">
                    F60.3
                  </div>
                </div>
                <p>
                  Marked by emotional dysregulation, impulsivity, and unstable
                  interpersonal relationships. It involves identity disturbance,
                  fear of abandonment, and recurrent self-harm or suicidality.
                  Treatment focuses on DBT and mood stabilization.
                </p>
              </div>
              <ScrollArea className="text-zinc-50 pt-2 h-[54vh]">
                <div className="space-y-2 h">
                  <Symptoms
                    message="Frantic efforts to avoid real or imagined abandonment."
                    isGood={true}
                  />
                  <Symptoms
                    message="A pattern of unstable and intense interpersonal relationships characterized by alternating between extremes of idealization and devaluation."
                    isGood={false}
                  />
                  <Symptoms
                    message="A pattern of unstable and intense interpersonal relationships characterized by alternating between extremes of idealization and devaluation."
                    isGood={false}
                  />
                  <Symptoms
                    message="Frantic efforts to avoid real or imagined abandonment."
                    isGood={true}
                  />
                  <Symptoms
                    message="Frantic efforts to avoid real or imagined abandonment."
                    isGood={true}
                  />
                  <Symptoms
                    message="Frantic efforts to avoid real or imagined abandonment."
                    isGood={true}
                  />
                  <Symptoms
                    message="Frantic efforts to avoid real or imagined abandonment."
                    isGood={true}
                  />
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
