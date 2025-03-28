// ini cuma placeholder, nanti sesuaikan sama yang sebenarnya.
// ini dibuat semudah mungkin agar bisa mengikuti figma
// ini amalgamation semua data, jangan dipake di actual thing
export type Patient = {
    PID: string;
    name: string;
    appointmentTime: string;
    currentMedication: string;
    currentDiagnosis: string;
    riskLevel: "High Risk" | "Moderate Risk" | "Low Risk";
    phone: string;
    lastVisit : Date;
    NextVisit : Date; 
    doctor : string;
    purpose : string;
    assessment : string;
    status : "Confirmed" | "Uncomfirmed";
    sessionSummary : string;
    severity : "Severe" | "Mild";
    firstDiagnosed : Date;
    currentStatus : string;
    dosage : string;
    startMedicine : Date;
    endMedicine : Date; 
    notesMedicine : string;
  };