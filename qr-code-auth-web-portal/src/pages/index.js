import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("token", "server token");
      router.push("/dashboard");
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/dashboard");
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-black-100">
        <div className="perspective-1000">
          <div className={`relative w-[400px] h-[400px]`}>
            {/* Login Form */}
            <div
              className={`absolute w-full h-full backface-hidden bg-white flex flex-col items-center p-8 rounded shadow-md ${
                isFlipped ? "hidden" : "block"
              }`}
            >
              <h2 className="text-2xl font-bold mb-4 text-black">Login</h2>

              <form onSubmit={handleSubmit} className="w-full">
                <label className="text-gray-600">Email</label>
                <input
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 p-2 rounded mb-4 w-full text-black"
                />

                <label className="text-gray-600">Password</label>
                <input
                  type="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-gray-300 p-2 rounded mb-4 w-full text-black"
                />

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white p-2 rounded"
                >
                  Login
                </button>
              </form>

              <span className="my-4 text-black">OR</span>

              <button
                type="button"
                onClick={handleFlip}
                className="w-full bg-blue-500 text-white p-2 rounded"
              >
                Login with QR Code
              </button>
            </div>

            {/* QR Code */}
            <div
              className={`absolute w-full h-full backface-hidden bg-white flex flex-col items-center justify-center p-8 rounded shadow-md ${
                isFlipped ? "block" : "hidden"
              }`}
            >
              <h2 className="text-2xl font-bold mb-4 text-black">
                Scan QR Code
              </h2>
              <div className="bg-gray-200 w-32 h-32 mb-4 flex items-center justify-center">
                QR CODE
              </div>
              <button
                onClick={handleFlip}
                className="w-full bg-green-600 text-white p-2 rounded"
              >
                Back to Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
