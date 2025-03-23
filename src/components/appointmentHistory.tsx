import { DataTable } from "./upcomingAppointment/data-table.jsx";
import { dataPasien } from "./dummy.js";
import { columns } from "./upcomingAppointment/columns.jsx";
import { Patient } from "./types.js";
export default function AppointmentHistory() {
  const singlePatient: Patient[] = [dataPasien[0]];
  // Asumsikan ada fungsi untuk ngambil data 1 orang.

  return (
    <>
      <div className="text-left space-y-2">
        <h3 className="font-bold">Upcoming Appointments</h3>
        <DataTable columns={columns} data={singlePatient} />
      </div>
    </>
  );
}
