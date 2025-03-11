import { FormData } from "../../(domain)/formData";

interface ConfirmationProps {
  formData: FormData;
}

const Confirmation: React.FC<ConfirmationProps> = ({ formData }) => {
  return (
    <>
      <div className="lg:text-2xl text-xl font-medium">Review and Confirm</div>
      <div className="lg:text-sm text-xs mt-2 text-gray-500">
        Please review your information to make sure everything is accurate.
      </div>

      <div className="mt-5 flex lg:flex-nowrap flex-wrap justify-between items-center font-medium gap-3">
        <div className="lg:w-[33%] w-full bg-[#F2F3F5] px-5 py-3 rounded-md text-xs">
          <div className="font-normal text-[#59595C]">Full Name</div>
          <p
            title={formData?.name}
            className="max-w-full overflow-hidden text-ellipsis mt-1 whitespace-nowrap"
          >
            {formData?.name || ""}
          </p>
        </div>
        <div className="lg:w-[33%] w-full bg-[#F2F3F5] px-5 py-3 rounded-md text-xs">
          <div className="font-normal text-[#59595C]">Email Address</div>
          <p
            title={formData?.email}
            className="max-w-full overflow-hidden text-ellipsis mt-1 whitespace-nowrap"
          >
            {formData?.email || ""}
          </p>
        </div>
        <div className="lg:w-[33%] w-full bg-[#F2F3F5] px-5 py-3 rounded-md text-xs">
          <div className="font-normal text-[#59595C]">Phone Number</div>
          <div className="mt-1">+91 {formData?.number}</div>
        </div>
      </div>

      <div className="lg:mt-5 mt-3 flex lg:flex-nowrap flex-wrap justify-between items-center font-medium gap-3">
        <div className="lg:w-[33%] w-full bg-[#F2F3F5] px-5 py-3 rounded-md text-xs">
          <div className="font-normal text-[#59595C]">
            Portfolio/Github Link
          </div>
          <p
            title={formData?.portfolio}
            className="max-w-full overflow-hidden text-ellipsis mt-1 whitespace-nowrap"
          >
            {formData?.portfolio}
          </p>
        </div>
        <div className="lg:w-[33%] w-full bg-[#F2F3F5] px-5 py-3 rounded-md text-xs">
          <div className="font-normal text-[#59595C]">Skill Level</div>
          <div className="mt-1">{formData?.skillLevel}</div>
        </div>
        <div className="lg:w-[33%] w-full bg-[#F2F3F5] px-5 py-3 rounded-md text-xs">
          <div className="font-normal text-[#59595C]">Challenge Preference</div>
          <div className="mt-1">{formData?.challengePref}</div>
        </div>
      </div>
    </>
  );
};

export default Confirmation;
