import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import QRCode from "react-qr-code";
import { ToastContainer, toast } from "react-toastify";
import { login, getQRCodeToken } from "../services/api";
import Pusher from "pusher-js";

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
        initializePusher(generateQRCodeToken?.token);
      }
    } catch (error) {
      console.log("showQrCode error", error);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Initialize Pusher
  const initializePusher = (chanelName) => {
    const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
      authEndpoint: `${process.env.NEXT_PUBLIC_API_BASE_URL}/pusher/auth`,
    });

    // Subscribe to the private channel
    const channel = pusher.subscribe("private-" + chanelName);
    console.log("initializePusher with channelId - ", chanelName);

    // Bind qr-code-login event
    channel.bind("qr-code-login", (data) => {
      console.log("QR code login event received:", data);
      handleQrCodeLogin(data);
    });

    // Handle logout event
    channel.bind("qr-code-logout", (eventData) => {
      toast(eventData.message);
      setTimeout(() => {
        localStorage.clear();
        router.push("/");
      }, 2500);
    });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const channelId = localStorage.getItem("channelId");
      if (channelId) {
        initializePusher(channelId);
      }
      router.push("/dashboard");
    }
  }, [router]);

  // Show QR Code
  useEffect(() => {
    let intervalId;
    if (isFlipped) {
      // Initial Call
      showQrCode();

      intervalId = setInterval(() => {
        showQrCode();
      }, 400000);
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isFlipped]);

  const handleQrCodeLogin = async (eventData) => {
    const tokenExist = localStorage.getItem("token");
    if (tokenExist) {
      return;
    }

    toast.success(eventData.message);

    let token = eventData && eventData?.data.token;
    localStorage.setItem("token", token);
    localStorage.setItem("channelId", eventData?.data.channelId);
    localStorage.setItem("authUser", JSON.stringify(eventData?.data.user));

    setTimeout(() => {
      router.push("/dashboard");
    }, 2500);
  };

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
                {!qrCodeData ? (
                  <div role="status" className="flex justify-center ">
                    <svg
                      aria-hidden="true"
                      className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="#FFFFFF"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="#000"
                      />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  <QRCode
                    size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value={qrCodeData}
                    viewBox={`0 0 256 256`}
                  />
                )}
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
