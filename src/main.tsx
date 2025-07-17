import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { Root, About } from "./routes";
import ErrorPage from "./ErrorPage";
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { ParticleProvider } from "./ParticleProvider";
import { Analytics } from "@vercel/analytics/react";
import { FpjsProvider } from '@fingerprintjs/fingerprintjs-pro-react';

const config: ThemeConfig = {
  useSystemColorMode: true,
};

const theme = extendTheme({ config });

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FpjsProvider
      loadOptions={{
        apiKey: "tgTY9wdcLtizH7f8xMVp"
      }}
    >
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
        <ParticleProvider />
        <Analytics />
      </ChakraProvider>
    </FpjsProvider>
  </React.StrictMode>
);
