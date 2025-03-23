import { DataTableDiagnosis } from "./diagnosisTable/data-table.jsx";
import { columnsDiagnosis } from "./diagnosisTable/columns.jsx";
import { dataPasien } from "./dummy.js";
import { Patient } from "./types.js";
import { DataTableMedication } from "./medicineTable/data-table.jsx";
import { columnsMedication } from "./medicineTable/columns.jsx";

export default function MedicalHistory() {
  const singlePatient: Patient[] = [dataPasien[0]];
  return (
    <>
      <div className="space-y-2">
        <h3 className="font-bold text-left">Psychiatric Diagnosis & Symptoms</h3>
        <DataTableDiagnosis columns={columnsDiagnosis} data={singlePatient} />
        <h3 className="font-bold text-left"> Medication Management</h3>
        <DataTableMedication columns={columnsMedication} data={singlePatient} />
      </div>
    </>
  );
}
