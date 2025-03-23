import Navbar from "@/components/navbar.jsx";
import BG3 from "../assets/BG3.png";
import { User } from "lucide-react";
import { DataTable } from "@/components/patientData/data-table";
import { columns } from "@/components/patientData/columns";
import { dataPasien } from "../components/dummy";
import { useNavigate } from "react-router-dom";

export default function Consultation() {
  const data = [
    {
      PID: "P001",
      name: "John Doe",
      appointmentTime: "2025-03-21",
      currentMedication: "Sertraline",
      currentDiagnosis: "Major Depressive Disorder",
      riskLevel: "Moderate Risk",
      phone: "+62 81272617398",
      lastVisit: "23/03/2025",
      nextVisit: "24/03/2025",
    },
  ];
  const navigate = useNavigate();

  const fetchedColumns = columns(navigate);

  return (
    <>
      <div
        className="w-[100vw] h-[100vh]"
        style={{
          backgroundImage: `url(${BG3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <div className="px-8">
          <div className="bg-zinc-50 w-full rounded-lg drop-shadow-lg p-4">
            <div className="flex gap-2 items-center">
              <User size="26" />
              <span className="font-bold text-xl">72</span>
              <span>total patients</span>
            </div>
            <DataTable columns={fetchedColumns} data={dataPasien} />
          </div>
        </div>
      </div>
    </>
  );
}
