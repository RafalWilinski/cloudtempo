import "../styles/globals.css";
import "../../front/my-app/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import "@fontsource/inter";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import * as Fathom from "fathom-client";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    Fathom.load("UKQDFMWN", {
      includedDomains: ["cloudtempo.dev"],
    });

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }
    router.events.on("routeChangeComplete", onRouteChangeComplete);

    return () => {
      router.events.off("routeChangeComplete", onRouteChangeComplete);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
