import { useState } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (email && password) {
    //   localStorage.setItem("email", email);
      router.push("/dashboard");
    // }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black-100">
      <div className="w-[400px] bg-white flex flex-col items-center p-8 rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-black">Login</h2>

        <form onSubmit={handleSubmit}>
          <label className="text-gray-600"> Email</label>
          <input
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-2 rounded mb-4 w-full text-black"
          />

          <label className="text-gray-600"> Password</label>
          <input
            type="text"
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

        <span className="my-4 text-black"> OR </span>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Login with QR Code
        </button>
      </div>
    </div>
  );
}
