 import DashboardHomeBox from "./DashboardHomeBox";
const DashboardHome = () => {
 
  return (
    <section className="py-7 px-4">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <DashboardHomeBox
          heading="Patients"
          total="0"
          borderColor="border-[#f97729]"
          color="text-[#f97729]"
        />
        <DashboardHomeBox
          heading="Services"
          total="0"
          borderColor="border-[#045544]" 
          color="text-[#045544]"
        />
        <DashboardHomeBox
          heading="Doctors"
          total="0"
          borderColor="border-[#f97729]"
          color="text-[#f97729]"
        />
        <DashboardHomeBox
          heading="Partners"
          total="0"
          borderColor="border-[#f97729]"
          color="text-[#f97729]"
        />
        <DashboardHomeBox
          heading="Testimonials"
          total="0"
          borderColor="border-[#045544]"
          color="text-[#045544]"
        />
        <DashboardHomeBox
          heading="NewsUpdates"
          total="0"
          borderColor="border-[#f97729]"
          color="text-[#f97729]"
        />
        <DashboardHomeBox
          heading="Comments"
          total="0"
          borderColor="border-[#f97729]"
          color="text-[#f97729]"
        />
         <DashboardHomeBox
          heading="Appointmentz"
          total="0"
          borderColor="border-[#f97729]"
          color="text-[#f97729]"
        />
        <DashboardHomeBox
          heading="Track Records"
          total="0"
          borderColor="border-[#045544]"
          color="text-[#045544]"
        />
       
      </div>
    </section>
  );
};

export default DashboardHome;
