import { useState } from "react";

interface PlatformSettings {
  commissionPercentage: number;
  withdrawal: number;
  courseCategories: string[];
}

function PlatFormSetting() {
  const platformSettings: PlatformSettings = {
    commissionPercentage: 15,
    withdrawal: 50.0,
    courseCategories: ["Design", "Business", "Development", "Languages"],
  };
  const [NewCategoryInput, setNewCategoryInput] = useState<Boolean>(false);
  function RenderComponent() {
    return (
      <div className="flex flex-col md:flex-row gap-1">
        <input
          className="border-gray-border border-[2px] rounded-[8px] p-2 w-fit"
          type="text"
          placeholder="Enter Category Name"
        />
        <button className="text-green-600 border-gray-border  border-[1px] rounded-[8px] py-2 px-5  w-fit">
          Add
        </button>
      </div>
    );
  }
  return (
    <div className="p-8 flex flex-col gap-5 bg-[#EBEBEB] h-full md:h-screen lg:h-full">
      <div className="flex flex-col gap-1">
        <h1 className="text-[#587DBD] font-sans text-[30px] font-medium">
          Platform Settings
        </h1>
        <p className="text-base">
          Configure platform-wide settings including commissions, categories,
          and withdrawal policies.
        </p>
      </div>
      <div className="flex flex-col md:w-[65%] gap-2.5">
        <div className=" ">
          <div className="bg-white px-4 py-4 flex flex-col gap-5 rounded-[10px]">
            <p className=" font-medium font-sans text-[18px] ">
              Commission Settings
            </p>
            <input
              className="border-gray-border border-[2px] rounded-[8px] p-3 w-fit"
              type="text"
              value={platformSettings.commissionPercentage}
            />
          </div>
        </div>
        <div className=" ">
          <div className="bg-white px-4 py-4 flex flex-col gap-5 rounded-[10px]">
            <p className=" font-medium font-sans text-[18px] ">
              Withdrawal Policy
            </p>
            <input
              className="border-gray-border border-[2px] rounded-[8px] p-3 w-fit"
              type="text"
              value={platformSettings.withdrawal}
            />
          </div>
        </div>
        <div className=" ">
          <div className="bg-white px-4 py-4 flex flex-col gap-3 rounded-[10px]">
            <p className=" font-medium font-sans text-[18px] ">
              Course Categories Management
            </p>

            <p className="font-normal font-sans text-[18px]">
              Available Categories:
            </p>
            <p>
              {"[ " +
                platformSettings.courseCategories.map((cat) => cat + " ") +
                "]"}
            </p>
            <div className="flex justify-start">
              <button
                onClick={() => setNewCategoryInput(true)}
                className="font-sans font-normal cursor-pointer text-[18px] hover:bg-gray-100 rounded-[4px] "
              >
                + Add New Category ⊕
              </button>
            </div>
            {NewCategoryInput && <RenderComponent />}
            <div className="flex gap-10 font-sans font-[500] text-[18px] ">
              <button className=" text-[#DB3B3B] border-gray-border  border-[1px] rounded-[8px] p-2 px-5  w-fit">
                Delete
              </button>
              <button className="text-[#3B82F6] border-gray-border  border-[1px] rounded-[8px] py-2 px-5  w-fit">
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlatFormSetting;
