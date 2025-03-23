import Navbar from "@/components/navbar";
import { DataTable } from "@/components/patientPreview/data-table";
import { columns } from "@/components/patientPreview/columns";
import BG3 from "../assets/BG3.png";
import { dataPasien } from "../components/dummy";

export default function Home() {
  return (
    <>
      <div
        className="w-[100vw] h-[100vh]"
        style={{
          backgroundImage: `url(${BG3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <div className="px-8 space-y-4">
          <div className="flex gap-4">
            <div>
              <div className="bg-zinc-50 space-y-1 drop-shadow-md w-[150px] h-[150px] p-4 text-left rounded-lg">
                <p className="font-bold">Appointments Today</p>
                <p className="text-4xl font-bold text-[var(--dark-purple)]">
                  25
                </p>
                <p>Patients</p>
              </div>
            </div>
            <div>
              <div className="bg-zinc-50 space-y-1 drop-shadow-md w-[150px] h-[150px] p-4 text-left rounded-lg">
                <p className="font-bold">Upcoming Appointments</p>
                <p className="text-4xl font-bold text-[var(--dark-green)]">
                  13
                </p>
                <p>Patients</p>
              </div>
            </div>
          </div>
          <div className="bg-zinc-50 drop-shadow-md p-6 rounded-lg max-w-full">
            <DataTable columns={columns} data={dataPasien} />
          </div>
        </div>
      </div>
    </>
  );
}
