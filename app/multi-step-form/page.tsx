"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Stepper from "./(components)/Stepper";
import { FaArrowLeftLong } from "react-icons/fa6";
import SkillLevel from "./(components)/SkillLevel";
import Confirmation from "./(components)/Confirmation";
import ChallengePreference from "./(components)/ChallengePrefrence";
import PersonalInformation from "./(components)/PersonalInformation";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    nameError: "",
    email: "",
    emailError: "",
    number: "",
    numberError: "",
    portfolio: "",
    portFolioError: "",
    skillLevel: "Beginner",
    challengePref: "HTML/CSS/JS",
  });

  const handleNext = () => {
    if (formData?.name?.trim() === "") {
      setFormData((prev) => ({ ...prev, nameError: "Please enter your name" }));
      return;
    }

    if (formData?.email?.trim() === "") {
      setFormData((prev) => ({
        ...prev,
        emailError: "Please enter your email",
      }));
      return;
    }

    if (formData?.number?.trim() === "") {
      setFormData((prev) => ({
        ...prev,
        numberError: "Please enter your number",
      }));
      return;
    }

    if (formData?.portfolio?.trim() === "") {
      setFormData((prev) => ({
        ...prev,
        portFolioError: "Please enter your link",
      }));
      return;
    }

    setCurrentStep((prev) => prev + 1);
  };

  return (
    <>
      <div className="p-5 bg-[#111827] text-white text-xl sticky top-0 left-0 right-0 flex items-center gap-4">
        <Link href="/">
          <FaArrowLeftLong className="cursor-pointer" />
        </Link>
        Multi Step Form
      </div>

      <div className="p-5 h-screen w-screen flex flex-col justify-center items-center">
        <div className="text-3xl font-semibold">
          Join our Community of Developers
        </div>
        <div className="text-center mt-3 text-sm">
          To join our community and participate in this challenges.
          <br /> Please fill out the following form.
        </div>

        {currentStep === 5 ? (
          <div
            style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            className="bg-white rounded-xl p-10 mt-10 flex flex-col items-center justify-center w-lg"
          >
            <Image src="/success.gif" width={100} height={100} alt="success" />
            <div className="mt-3 text-2xl">Congratulations!</div>
            <div className="text-center text-xs mt-5 text-[#59595C]">
              Your profile has been created and you are now ready to start
              participating in challenges that match your interest and coding
              experience level.
            </div>
          </div>
        ) : (
          <div
            style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
            className="bg-white rounded-xl p-5 mt-10"
          >
            <div className="px-3">
              <Stepper
                primaryColor="#E96A49"
                secondaryColor="#E5E7EB"
                currentStep={currentStep}
                steps={4}
              >
                {currentStep === 1 ? (
                  <PersonalInformation
                    formData={formData}
                    setFormData={setFormData}
                  />
                ) : currentStep === 2 ? (
                  <SkillLevel formData={formData} setFormData={setFormData} />
                ) : currentStep === 3 ? (
                  <ChallengePreference
                    formData={formData}
                    setFormData={setFormData}
                  />
                ) : (
                  <Confirmation formData={formData} />
                )}

                <hr className="my-5 border-gray-200 border-1" />
                <div className="w-full flex justify-between items-center text-sm">
                  {currentStep === 1 ? (
                    <div></div>
                  ) : (
                    <button
                      className="border-[#E96A49] border text-[#E96A49] px-3 py-2 rounded cursor-pointer h-10"
                      onClick={() => setCurrentStep((prev) => prev - 1)}
                    >
                      Go Back
                    </button>
                  )}
                  {currentStep === 4 ? (
                    <button
                      className="bg-[#E96A49] text-white px-3 py-2 rounded cursor-pointer h-10"
                      onClick={() => setCurrentStep((prev) => prev + 1)}
                    >
                      Submit
                    </button>
                  ) : (
                    <button
                      className="bg-[#E96A49] text-white px-3 py-2 rounded cursor-pointer h-10"
                      onClick={handleNext}
                    >
                      Next Step
                    </button>
                  )}
                </div>
              </Stepper>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MultiStepForm;
