// ini cuma placeholder, nanti sesuaikan sama yang sebenarnya.
// ini dibuat semudah mungkin agar bisa mengikuti figma
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
  };