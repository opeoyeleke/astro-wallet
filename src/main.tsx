import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import Onboarding from "./pages/Onboarding";
import { WagmiConfig, createConfig, configureChains, mainnet } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import "@mantine/core/styles.css";
import "./index.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Onboarding />,
  },
]);

const { publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

const config = createConfig({
  autoConnect: true,
  publicClient,
  webSocketPublicClient,
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <WagmiConfig config={config}>
      <MantineProvider
        theme={{
          fontFamily: "Inter",
          colors: {
            "color-primary": [
              "var(--color-primary-50)",
              "var(--color-primary-100)",
              "var(--color-primary-200)",
              "var(--color-primary-300)",
              "var(--color-primary-400)",
              "var(--color-primary-500)",
              "var(--color-primary-600)",
              "var(--color-primary-700)",
              "var(--color-primary-800)",
              "var(--color-primary-900)",
            ],
          },
          primaryColor: "color-primary",
          defaultRadius: 6,
        }}
      >
        <RouterProvider router={router} />
      </MantineProvider>
    </WagmiConfig>
  </React.StrictMode>
);
