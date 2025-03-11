import { PiPlant } from "react-icons/pi";
import { FaCompass } from "react-icons/fa";
import { FormData } from "../../(domain)/formData";
import { IoIosRocket, IoMdTrophy } from "react-icons/io";

interface SkillLevelProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const SkillLevel: React.FC<SkillLevelProps> = ({ formData, setFormData }) => {
  return (
    <>
      <div className="lg:text-2xl text-xl font-medium">Skill Level</div>
      <div className="lg:text-sm text-xs mt-2 text-gray-500">
        Please tell us about your skill level in frontend development.
      </div>

      <div className="mt-5 flex lg:flex-nowrap flex-wrap justify-between items-center font-medium lg:gap-10 gap-5">
        <div
          className={`flex gap-3 items-center border ${
            formData?.skillLevel === "Beginner"
              ? "border-[#E96A49]"
              : "border-gray-300"
          } hover:border-[#E96A49] p-3 py-4 rounded-md lg:w-1/2 w-full cursor-pointer`}
          onClick={() =>
            setFormData((prev) => ({
              ...prev,
              skillLevel: "Beginner",
            }))
          }
        >
          <div className="w-8 h-8 bg-[#E96A49] rounded-full flex justify-center items-center text-white">
            <PiPlant />
          </div>
          Beginner
        </div>

        <div
          className={`flex gap-3 items-center border ${
            formData?.skillLevel === "Intermediate"
              ? "border-[#E96A49]"
              : "border-gray-300"
          } p-3 py-4 hover:border-[#E96A49] rounded-md lg:w-1/2 w-full cursor-pointer`}
          onClick={() =>
            setFormData((prev) => ({
              ...prev,
              skillLevel: "Intermediate",
            }))
          }
        >
          <div className="w-8 h-8 bg-[#E96A49] rounded-full flex justify-center items-center text-white">
            <FaCompass />
          </div>
          Intermediate
        </div>
      </div>

      <div className="mt-5 flex lg:flex-nowrap flex-wrap justify-between items-center font-medium lg:gap-10 gap-5">
        <div
          className={`flex gap-3 items-center border ${
            formData?.skillLevel === "Advanced"
              ? "border-[#E96A49]"
              : "border-gray-300"
          } p-3 py-4 hover:border-[#E96A49] rounded-md lg:w-1/2 w-full cursor-pointer`}
          onClick={() =>
            setFormData((prev) => ({
              ...prev,
              skillLevel: "Advanced",
            }))
          }
        >
          <div className="w-8 h-8 bg-[#E96A49] rounded-full flex justify-center items-center text-white">
            <IoIosRocket />
          </div>
          Advanced
        </div>

        <div
          className={`flex gap-3 items-center border ${
            formData?.skillLevel === "Expert"
              ? "border-[#E96A49]"
              : "border-gray-300"
          } p-3 py-4 hover:border-[#E96A49] rounded-md lg:w-1/2 w-full cursor-pointer`}
          onClick={() =>
            setFormData((prev) => ({
              ...prev,
              skillLevel: "Expert",
            }))
          }
        >
          <div className="w-8 h-8 bg-[#E96A49] rounded-full flex justify-center items-center text-white">
            <IoMdTrophy />
          </div>
          Expert
        </div>
      </div>
    </>
  );
};

export default SkillLevel;
