import { ColumnDef } from "@tanstack/react-table";
import { Patient } from "../types.js";

export const columnsMedication: ColumnDef<Patient>[] = [
  {
    accessorKey: "currentMedication",
    header: "Medication",
  },
  {
    accessorKey: "dosage",
    header: "Daily Dosage",
  },
  {
    accessorKey: "startMedicine",
    header: "Start Date",
  },
  {
    accessorKey: "endMedicine",
    header: "End Date",
  },
  {
    accessorKey: "notesMedicine",
    header: "Notes",
  },
];
