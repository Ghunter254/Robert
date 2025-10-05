import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./hooks/ErrorBoundary.tsx";
import { CartProvider } from "./components/Cart/CartProvider.tsx";
import { AuthProvider } from "./context/AuthContext.tsx";

const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <AuthProvider>
            <App />
          </AuthProvider>
        </CartProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  </BrowserRouter>
);
