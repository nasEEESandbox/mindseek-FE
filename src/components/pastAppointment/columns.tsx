import { ColumnDef } from "@tanstack/react-table";
import { Patient } from "../types.js";

export const columns: ColumnDef<Patient>[] = [
  {
    accessorKey: "appointmentTime",
    header: "Date & Time",
  },
  {
    accessorKey: "doctor",
    header: "Doctor Assigned",
  },
  {
    accessorKey: "purpose",
    header: "Purpose of Visit",
  },
  {
    accessorKey: "assessment",
    header: "Planned Assessment/Test",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
];
