import BG3 from "../assets/BG3.png";
import Navbar from "@/components/navbar";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PersonalInfo from "@/components/personalInfo";
import AppointmentHistory from "@/components/appointmentHistory.jsx";

export default function Patient() {
  return (
    <>
      <div
        className="w-[100vw] min-h-[100vh]"
        style={{
          backgroundImage: `url(${BG3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <div className="p-8">
          <div className="bg-zinc-50 drop-shadow-lg p-10 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex gap-4 items-center">
                <Avatar className="size-24 border-4 border-primary">
                  <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0r9YAdkCAZqbishkx5Y0ehWQm89BnUH01qA&s" />
                  <AvatarFallback>CA</AvatarFallback>
                </Avatar>
                <div className="flex flex-col text-left">
                  <div className="text-sm bg-red-400 h-fit w-fit px-2 py-1 rounded-lg text-zinc-50">
                    High Risk
                  </div>
                  <p className="text-3xl font-bold mt-2">Budi Santoso</p>
                  <div className="text-zinc-400 text-sm">
                    <span className="font-bold">Patient ID : </span>
                    <span>123194-7523</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="text-sm text-right">
                  <p>Next Appointment</p>
                  <p className="font-bold">24/03/2025</p>
                </div>
                <Button>Make Appointment</Button>
              </div>
            </div>
            <div className="mt-8">
              <Tabs defaultValue="personalInfo">
                <TabsList>
                  <TabsTrigger value="personalInfo">
                    Personal Information
                  </TabsTrigger>
                  <TabsTrigger value="appointment">
                    Appointment History
                  </TabsTrigger>
                  <TabsTrigger value="medical">Medical History</TabsTrigger>
                </TabsList>
                <TabsContent value="personalInfo">
                  <PersonalInfo />
                </TabsContent>
                <TabsContent value="appointment">
                    <AppointmentHistory />
                </TabsContent>
                <TabsContent value="medical">MEDICAL</TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
