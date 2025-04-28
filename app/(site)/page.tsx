import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-12 sm:py-6 sm:px-2  bg-gray-100">
      <div className="sm:mx-auto md:w-full sm:max-w-md">
        {/* <Image
          alt="Logo"
          src="/images/logo.png"
          width={48}
          height={48}
          className="mx-auto w-auto"
        /> */}
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>
      <AuthForm />
    </div>
  );
}
