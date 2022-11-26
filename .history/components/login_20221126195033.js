import { signIn } from "next-auth/react";
import Image from "next/image";

function Login( {providers} ){
  console.log(providers);

  return (
    <div className="flex flex-col items-center space-y-20 pt-48">
      <img
        src="https://rb.gy/ogau5a"
        width={150}
        height={150}
        objectFit="contain"
      />
      Login
    </div>
  );
}

export default Login;
