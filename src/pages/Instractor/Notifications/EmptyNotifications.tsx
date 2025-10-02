import bell from "../../../assets/images/no-notifications.png";
function EmptyNotifications() {
  return (
    <div className=" flex justify-center items-center h-[90vh]">
      <div className="flex flex-col items-center  ">
        <img className="h-[120px] w-[105px]" src={bell} alt="bell" />
        <h1 className="font-sans text-2xl font-bold">You are all up to date</h1>
        <h1 className="font-sans text-base text-[#707070] font-normal">
          No new notifications - come back soon
        </h1>
      </div>
    </div>
  );
}

export default EmptyNotifications;
