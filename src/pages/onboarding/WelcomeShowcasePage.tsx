/** @doc Legacy welcome route — onboarding gate removed; always redirects to auth. */
import { Navigate } from "react-router-dom";

export default function WelcomeShowcasePage() {
  return <Navigate to="/auth" replace />;
}
