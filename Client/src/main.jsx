import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

// Clerk appearance configuration for better sign-in experience
const clerkAppearance = {
  elements: {
    formButtonPrimary: "bg-black hover:bg-gray-800 text-white",
    card: "shadow-lg",
    headerTitle: "text-2xl font-bold",
    headerSubtitle: "text-gray-600",
    socialButtonsBlockButton: "border border-gray-300 hover:bg-gray-50",
    socialButtonsBlockButtonText: "text-gray-700",
    dividerLine: "bg-gray-300",
    dividerText: "text-gray-500",
    formFieldLabel: "text-gray-700 font-medium",
    formFieldInput: "border border-gray-300 focus:border-black focus:ring-1 focus:ring-black",
    footerActionLink: "text-black hover:text-gray-700"
  },
  layout: {
    socialButtonsPlacement: "top",
    socialButtonsVariant: "blockButton"
  }
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ClerkProvider 
        publishableKey={PUBLISHABLE_KEY}
        appearance={clerkAppearance}
      >
        <App />
      </ClerkProvider>
    </BrowserRouter>
  </StrictMode>
);
