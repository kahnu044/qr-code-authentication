import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import QRCode from "react-qr-code";
import { ToastContainer, toast } from "react-toastify";
import { login, getQRCodeToken } from "../services/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFlipped, setIsFlipped] = useState(false);
  const [qrCodeData, setQrCodeData] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      console.log("Login:", data);
      toast.success("Login Successfully");
    } catch (err) {
      let errorMsg =
        err?.data && err.data?.error ? err.data.error : "Failed to login";
      toast.error(errorMsg);
    }
  };

  const showQrCode = async () => {
    try {
      const generateQRCodeToken = await getQRCodeToken();
      if (generateQRCodeToken && generateQRCodeToken?.token) {
        setQrCodeData(generateQRCodeToken?.token);
      }
    } catch (error) {
      console.log("showQrCode error", error);
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

  // Show QR Code
  useEffect(() => {
    let intervalId;

    if (isFlipped) {
      intervalId = setInterval(() => {
        showQrCode();
      }, 10000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isFlipped]);

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <ToastContainer autoClose={2000} />
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

              <form onSubmit={handleLogin} className="w-full">
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

              <div className="h-auto m-auto w-full max-w-[180px]">
                <QRCode
                  size={256}
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                  value={qrCodeData}
                  viewBox={`0 0 256 256`}
                />
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
