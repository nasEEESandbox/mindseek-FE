import Navbar from "@/components/navbar";
import { DataTable } from "@/components/patientPreview/data-table";
import { columns, Patient } from "@/components/patientPreview/columns";

export default function Home() {
  const data = [
    {
      PID: "P001",
      name: "John Doe",
      appointmentTime: "2025-03-21",
      currentMedication: "Sertraline",
      currentDiagnosis: "Major Depressive Disorder",
      riskLevel: "Moderate Risk",
    },
    {
      PID: "P002",
      name: "Jane Smith",
      appointmentTime: "2025-03-22",
      currentMedication: "Lithium",
      currentDiagnosis: "Bipolar Disorder",
      riskLevel: "High Risk",
    },
    {
      PID: "P003",
      name: "Alice Johnson",
      appointmentTime: "2025-03-23",
      currentMedication: "None",
      currentDiagnosis: "Generalized Anxiety Disorder",
      riskLevel: "Low Risk",
    },
    {
      PID: "P004",
      name: "Bob Williams",
      appointmentTime: "2025-03-24",
      currentMedication: "Quetiapine",
      currentDiagnosis: "Schizophrenia",
      riskLevel: "High Risk",
    },
    {
      PID: "P005",
      name: "Emma Brown",
      appointmentTime: "2025-03-25",
      currentMedication: "Fluoxetine",
      currentDiagnosis: "Obsessive-Compulsive Disorder",
      riskLevel: "Moderate Risk",
    },
    {
      PID: "P006",
      name: "Michael Davis",
      appointmentTime: "2025-03-26",
      currentMedication: "None",
      currentDiagnosis: "Post-Traumatic Stress Disorder",
      riskLevel: "Moderate Risk",
    },
    {
      PID: "P005",
      name: "Emma Brown",
      appointmentTime: "2025-03-25",
      currentMedication: "Fluoxetine",
      currentDiagnosis: "Obsessive-Compulsive Disorder",
      riskLevel: "Moderate Risk",
    },
    {
      PID: "P006",
      name: "Michael Davis",
      appointmentTime: "2025-03-26",
      currentMedication: "None",
      currentDiagnosis: "Post-Traumatic Stress Disorder",
      riskLevel: "Moderate Risk",
    },
  ];
  return (
    <>
      <Navbar />
      <div className="px-6 space-y-4">
        <div className="flex gap-4">
          <div>
            <div className="bg-zinc-50 w-[150px] h-[150px] p-4 text-left rounded-lg">
              <p className="font-bold">Appointments Today</p>
              <p className="text-4xl font-bold">25</p>
              <p>Patients</p>
            </div>
          </div>
          <div>
            <div className="bg-zinc-50 w-[150px] h-[150px] p-4 text-left rounded-lg">
              <p className="font-bold">Appointments Today</p>
              <p className="text-4xl font-bold">25</p>
              <p>Patients</p>
            </div>
          </div>
        </div>
        <div className="bg-zinc-50 p-6 rounded-lg max-w-full">
          <DataTable className="" columns={columns} data={data} />
        </div>
      </div>
    </>
  );
}
