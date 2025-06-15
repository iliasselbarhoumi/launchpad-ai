import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Assessment from "./pages/Assessment";
import Footer from "./components/Footer";
import Result from "./pages/Result";
import BuildProfile from "./pages/BuildProfile";
import Dashboard from "./pages/Dashboard";
import GenerateIdeas from "./pages/GenerateIdeas";
import Profile from "./pages/Profile";
import BillingPage from "./pages/Billing";
import Pricing from "./components/Pricing";
import FeedbackPage from "./pages/Feedback";
import MvpPromptPage from "./pages/MvpPromptPage";
import MvpPlanPage from "./pages/MvpPlanPage";

const queryClient = new QueryClient();

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
};

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Index />
              </Layout>
            }
          />
          <Route
            path="/assessment"
            element={
              <ProtectedRoute>
                <Layout>
                  <Assessment />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/result"
            element={
              <Layout>
                <Result />
              </Layout>
            }
          />
          <Route
            path="/profile"
            element={
              <Layout>
                <Profile />
              </Layout>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Layout>
                  <Dashboard />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/build-profile"
            element={
              <ProtectedRoute>
                <Layout>
                  <BuildProfile />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/ideas/list"
            element={
              <ProtectedRoute>
                <Layout>
                  <GenerateIdeas />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/billing"
            element={
              <ProtectedRoute>
                <Layout>
                  <BillingPage />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/feedback"
            element={
              <ProtectedRoute>
                <Layout>
                  <FeedbackPage />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/ideas/:ideaId/mvp-prompt"
            element={
              <ProtectedRoute>
                <Layout>
                  <MvpPromptPage />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/ideas/:ideaId/mvp-plan"
            element={
              <ProtectedRoute>
                <Layout>
                  <MvpPlanPage />
                </Layout>
              </ProtectedRoute>
            }
          />
          <Route
            path="*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
