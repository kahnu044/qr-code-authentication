import React, { useEffect }  from "react";
import { useRouter } from "next/router";
import Head from "next/head";

function dashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/');
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>Welcome to the dashboard</title>
      </Head>
      <div>dashboard</div>
    </>
  );
}

export default dashboard;
