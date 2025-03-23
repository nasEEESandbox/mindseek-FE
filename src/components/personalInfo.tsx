export default function PersonalInfo() {
  return (
    <>
      <div className="flex justify-between text-sm">
        <div className="w-1/4 space-y-3">
          <h3 className="text-lg font-bold text-left">General Information</h3>
          <div className="flex justify-between">
            <span className="text-zinc-500">Patient ID</span>
            <span>123194-7523</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-500">Government ID</span>
            <span>3275**********</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-500">Gender</span>
            <span>Male</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-500">Age</span>
            <span>25</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-500">Date of Birth</span>
            <span>20 June 2000</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-500">Blood Group</span>
            <span>A+</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-500">Marital Status</span>
            <span>Divorced</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-500">Occupation</span>
            <span>Firefighter</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-500">Insurance Provider</span>
            <span>Zurich Insurance</span>
          </div>
        </div>
        <div className="w-1/4 space-y-3">
          <h3 className="text-lg font-bold text-left">Contact Information</h3>
          <div className="flex justify-between">
            <span className="text-zinc-500">Phone Number</span>
            <span>+62 81272617398</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-500">Email Address</span>
            <span>santoso@budi.dev</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-500">Home Address</span>
            <span>*************</span>
          </div>
        </div>
        <div className="w-1/4 space-y-3">
          <h3 className="text-lg font-bold text-left">Emergency Contact</h3>
          <div className="flex justify-between">
            <span className="text-zinc-500">Name</span>
            <span>Maria Aulia Asvelia</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-500">Phone Number</span>
            <span>+62 85333112317</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-500">Relationship to Patient</span>
            <span>Parent</span>
          </div>
        </div>
      </div>
    </>
  );
}
