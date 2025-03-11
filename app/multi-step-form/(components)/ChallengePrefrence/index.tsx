import { FormData } from "../../(domain)/formData";

interface ChallengeLevelProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const ChallengePreference: React.FC<ChallengeLevelProps> = ({
  formData,
  setFormData,
}) => {
  return (
    <>
      <div className="lg:text-2xl text-xl font-medium">
        Challenge Preference
      </div>
      <div className="lg:text-sm text-xs mt-2 text-gray-500">
        Please tell us which frontend challenges you would like to participate
        in.
      </div>

      <div className="mt-5 flex lg:flex-nowrap flex-wrap justify-between items-center font-medium lg:gap-10 gap-3">
        <div
          onClick={() =>
            setFormData((prev) => ({
              ...prev,
              challengePref: "HTML/CSS/JS",
            }))
          }
          className={`flex gap-3 items-center border ${
            formData?.challengePref === "HTML/CSS/JS"
              ? "border-[#E96A49]"
              : "border-gray-300"
          } hover:border-[#E96A49] p-3 py-4 rounded-md lg:w-1/2 w-full cursor-pointer`}
        >
          <input
            type="checkbox"
            checked={formData?.challengePref === "HTML/CSS/JS"}
            readOnly
            className="w-4 h-4 accent-[#E96A49]"
          />
          HTML/CSS/JS
        </div>

        <div
          onClick={() =>
            setFormData((prev) => ({
              ...prev,
              challengePref: "ReactJs",
            }))
          }
          className={`flex gap-3 items-center border ${
            formData?.challengePref === "ReactJs"
              ? "border-[#E96A49]"
              : "border-gray-300"
          } p-3 py-4 hover:border-[#E96A49] rounded-md lg:w-1/2 w-full cursor-pointer`}
        >
          <input
            type="checkbox"
            checked={formData?.challengePref === "ReactJs"}
            readOnly
            className="w-4 h-4 accent-[#E96A49]"
          />
          ReactJs
        </div>
      </div>

      <div className="lg:mt-5 mt-3 flex lg:flex-nowrap flex-wrap justify-between items-center font-medium lg:gap-10 gap-3">
        <div
          onClick={() =>
            setFormData((prev) => ({
              ...prev,
              challengePref: "Angular JS",
            }))
          }
          className={`flex gap-3 items-center border ${
            formData?.challengePref === "Angular JS"
              ? "border-[#E96A49]"
              : "border-gray-300"
          } hover:border-[#E96A49] p-3 py-4 rounded-md lg:w-1/2 w-full cursor-pointer`}
        >
          <input
            type="checkbox"
            checked={formData?.challengePref === "Angular JS"}
            readOnly
            className="w-4 h-4 accent-[#E96A49]"
          />
          Angular JS
        </div>

        <div
          onClick={() =>
            setFormData((prev) => ({
              ...prev,
              challengePref: "View.js",
            }))
          }
          className={`flex gap-3 items-center border ${
            formData?.challengePref === "View.js"
              ? "border-[#E96A49]"
              : "border-gray-300"
          } hover:border-[#E96A49] p-3 py-4 rounded-md lg:w-1/2 w-full cursor-pointer`}
        >
          <input
            type="checkbox"
            checked={formData?.challengePref === "View.js"}
            readOnly
            className="w-4 h-4 accent-[#E96A49]"
          />
          View.js
        </div>
      </div>
    </>
  );
};

export default ChallengePreference;
