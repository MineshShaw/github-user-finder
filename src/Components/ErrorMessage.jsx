const ErrorMessage = ({message}) => {
  return (
    <div className="ErrorMessage flex justify-center items-center w-screen">
      <div className="bg-red-500 rounded p-4 my-4 w-[500px] text-white">
        <p className="font-bold">Error</p>
        <p>{message? message:"Unable to find user. Please check your internet connection or try again later."}</p>
      </div>
    </div>
  );
}

export default ErrorMessage;