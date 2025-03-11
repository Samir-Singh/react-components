import { FormData } from "../../(domain)/formData";

interface PersonalInformationProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

const PersonalInformation: React.FC<PersonalInformationProps> = ({
  formData,
  setFormData,
}) => {
  return (
    <>
      <div className="lg:text-2xl text-xl font-medium">
        Personal Information
      </div>
      <div className="lg:text-sm text-xs mt-2 text-gray-500">
        Please provide your personal details so we can get to know you better.
      </div>

      <div className="mt-5 flex flex-wrap lg:flex-nowrap justify-between lg:gap-10 gap-3 text-sm">
        <div className="lg:w-1/2 w-full">
          <div>Full Name</div>
          <input
            value={formData?.name}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                name: e?.target?.value,
                nameError: "",
              }))
            }
            type="text"
            placeholder="your name"
            className={`border ${
              formData?.nameError ? "border-[#BF0E00]" : "border-gray-300"
            } rounded-md mt-2 w-full lg:p-2 p-3 outline-none focus-within:border focus-within:border-[#E96A49]`}
          />
          {formData?.nameError && (
            <p className="text-xs mt-1 text-[#BF0E00]">{formData?.nameError}</p>
          )}
        </div>
        <div className="lg:w-1/2 w-full">
          <div>Email Address</div>
          <input
            value={formData?.email}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                email: e?.target?.value,
                emailError: "",
              }))
            }
            type="email"
            placeholder="name@email.com"
            className={`border ${
              formData?.emailError ? "border-[#BF0E00]" : "border-gray-300"
            } rounded-md mt-2 w-full lg:p-2 p-3 outline-none focus-within:border focus-within:border-[#E96A49]`}
          />
          {formData?.emailError && (
            <p className="text-xs mt-1 text-[#BF0E00]">
              {formData?.emailError}
            </p>
          )}
        </div>
      </div>

      <div className="lg:mt-5 mt-3 flex justify-between lg:flex-nowrap flex-wrap lg:gap-10 gap-3 text-sm">
        <div className="lg:w-1/2 w-full">
          <div>Phone Number</div>
          <input
            value={formData?.number}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                number: e?.target?.value,
                numberError: "",
              }))
            }
            type="text"
            placeholder="+91 9999999999"
            maxLength={10}
            className={`border ${
              formData?.numberError ? "border-[#BF0E00]" : "border-gray-300"
            } rounded-md mt-2 w-full lg:p-2 p-3 outline-none focus-within:border focus-within:border-[#E96A49]`}
          />
          {formData?.numberError && (
            <p className="text-xs mt-1 text-[#BF0E00]">
              {formData?.numberError}
            </p>
          )}
        </div>
        <div className="lg:w-1/2 w-full">
          <div>Portfolio/Github Link</div>
          <input
            value={formData?.portfolio}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                portfolio: e?.target?.value,
                portFolioError: "",
              }))
            }
            type="text"
            placeholder="github.com/username"
            className={`border ${
              formData?.portFolioError ? "border-[#BF0E00]" : "border-gray-300"
            } rounded-md mt-2 w-full lg:p-2 p-3 outline-none focus-within:border focus-within:border-[#E96A49]`}
          />
          {formData?.portFolioError && (
            <p className="text-xs mt-1 text-[#BF0E00]">
              {formData?.portFolioError}
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default PersonalInformation;
