import Login from "../components/modules/login/Login";
import Slider from "../components/modules/Slider";

const LoginPage = () => {
  return (
    <div className="flex flex-wrap">
      <div className="w-full md:w-1/2">
        <Slider />
      </div>
      <div className="w-full md:w-1/2 bg-gray flex flex-col justify-center items-center h-screen">
        <div className="flex items-center space-x-4">
          <h3>Logo</h3>
          <h3 className="font-bold text-2xl">Social V</h3>
        </div>
        <p className="my-4 text-bodyColor text-center px-4">
          Welcome to socialV, a platform to connect with the social world
        </p>
        <Login />
      </div>
    </div>
  );
};

export default LoginPage;
