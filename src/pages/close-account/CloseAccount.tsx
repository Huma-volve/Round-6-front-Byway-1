export default function CloseAccount() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-[calc(100vh-10rem)]">
        <h1 className="text-2xl font-semibold">Close Account</h1>
        <p className="text-gray-400 font-medium">
          Close your account permanently.
        </p>
        <p className="my-4 font-medium w-[60%] text-center">
          <span className="font-semibold text-error-800">Warning:</span> If you
          close your account, you will be unsubscribed from all 3 of your
          courses and will lose access to your account and data associated with
          your account forever, even if you choose to create a new account using
          the same email address in the future.
        </p>
        <p className="font-medium w-[55%] text-center">
          Please note, if you want to reinstate your account after submitting a
          deletion request, you will have 14 days after the initial submission
          date to reach out to privacy@udemy.com to cancel this request.
        </p>
      </div>
    </>
  );
}
