import React, { ReactNode } from "react";

type StepperProps = {
  primaryColor: string;
  secondaryColor: string;
  currentStep: number;
  steps: number;
  children: ReactNode;
};

const Stepper: React.FC<StepperProps> = ({
  primaryColor,
  secondaryColor,
  currentStep,
  steps,
  children,
}) => {
  return (
    <>
      <div className="flex justify-center items-center text-sm">
        {Array.from({ length: steps }, (_, index) => (
          <React.Fragment key={index}>
            <div
              style={{
                backgroundColor:
                  index + 1 <= currentStep ? primaryColor : secondaryColor,
                color: index + 1 <= currentStep ? "white" : "black",
              }}
              className="w-8 h-8 flex justify-center items-center rounded-full transition-all duration-500"
            >
              {index + 1}
            </div>
            {index + 1 < steps && (
              <div
                style={{
                  backgroundColor:
                    index + 1 < currentStep ? primaryColor : secondaryColor,
                }}
                className="lg:w-32 w-10 h-1.5 mx-2 rounded-4xl transition-all duration-500"
              ></div>
            )}
          </React.Fragment>
        ))}
      </div>
      <hr className="my-5 border-gray-200 border-1" />
      <div>{children}</div>
    </>
  );
};

export default Stepper;
