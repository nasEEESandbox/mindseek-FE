import { ColumnDef } from "@tanstack/react-table";
import { Patient } from "../types.js";

export const columnsDiagnosis: ColumnDef<Patient>[] = [
  {
    accessorKey: "currentDiagnosis",
    header: "Diagnosis",
  },
  {
    accessorKey: "severity",
    header: "Severity",
  },
  {
    accessorKey: "firstDiagnosed",
    header: "First Diagnosed",
  },
  {
    accessorKey: "currentStatus",
    header: "Current Status",
  },
];
