import { DataTableUpcoming } from "./upcomingAppointment/data-table";
import { dataPasien } from "./dummy";
import { columnsUpcoming } from "./upcomingAppointment/columns";
import { columnsPast } from "./pastAppointment/columns";
import { Patient } from "./types";
import { DataTablePast } from "./pastAppointment/data-table";
// i have NO idea kenapa dia ngebaca ini sebagai js. AKU JUGA BINGUNG.
// aku coba ignore dulu errornya. Kalau beneran gabisa build nanti aku debug.

export default function AppointmentHistory() {
  const singlePatient: Patient[] = [dataPasien[0]];
  // Asumsikan ada fungsi untuk ngambil data 1 orang.

  return (
    <>
      <div className="text-left space-y-4">
        <h3 className="font-bold">Upcoming Appointments</h3>
        <DataTableUpcoming columns={columnsUpcoming} data={singlePatient} />
        <h3 className="font-bold">Past Appointments</h3>
        <DataTablePast columns={columnsPast} data={singlePatient} />
      </div>
    </>
  );
}
