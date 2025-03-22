import { ColumnDef } from "@tanstack/react-table";

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
    header: "Appointment Time",
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
