import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "../ui/button.jsx";
export type patient = {
  PID: String;
  name: String;
  appointmentTime: Date;
  currentMedication: String;
  currentDiagnosis: String;
  riskLevel: "High Risk" | "Moderate Risk" | "Low Risk";
};

export const columns: ColumnDef<Patient>[] = [
  {
    accessorKey: "PID",
    header: "PID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "appointmentTime",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Appointment Time
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "currentMedication",
    header: "Current Medication",
  },
  {
    accessorKey: "currentDiagnosis",
    header: "Current Diagnosis",
  },
  {
    accessorKey: "riskLevel",
    header: "Risk Level",
  },
];
