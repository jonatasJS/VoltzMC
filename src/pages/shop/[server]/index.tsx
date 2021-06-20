import Head from "next/head";
import React from "react";

export default function server() {

  return (
    <div>
      <Head>
        <title>Loja | VoltzMC</title>
        {/* <script>window.location.pathname = "/shop"</script> */}
        <script>window.document.location.pathname = "/shop"</script>
      </Head>
    </div>
  );
}