import { ColumnDef } from "@tanstack/react-table";
import { Patient } from "../types.js";

export const columnsPast: ColumnDef<Patient>[] = [
  {
    accessorKey: "appointmentTime",
    header: "Date & Time",
  },
  {
    accessorKey: "doctor",
    header: "Doctor Assigned",
  },
  {
    accessorKey: "sessionSummary",
    header: "Session Summary",
  },
];
