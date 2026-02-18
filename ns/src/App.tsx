import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import { AppLayout } from "@/components/layout/AppLayout";
import ProtectedRoute from "@/components/ProtectedRoute";
import RoleProtectedRoute from "@/components/RoleProtectedRoute";
import RoleBasedRedirect from "@/components/RoleBasedRedirect";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import NotFound from "./pages/NotFound";
import CustomerHome from "./pages/customer/CustomerHome";
import WorkerSearch from "./pages/customer/WorkerSearch";
import RequestForm from "./pages/customer/RequestForm";
import MyRequests from "./pages/customer/MyRequests";
import WorkerHome from "./pages/worker/WorkerHome";
import RequestsInbox from "./pages/worker/RequestsInbox";
import Attendance from "./pages/worker/Attendance";
import AdminDashboard from "./pages/admin/AdminDashboard";
import WorkersManagement from "./pages/admin/WorkersManagement";
import RequestsManagement from "./pages/admin/RequestsManagement";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const { isAuthenticated, user } = useAuth();

  console.log('=== APP ROUTES RENDER ===');
  console.log('isAuthenticated:', isAuthenticated);
  console.log('user:', user);

  return (
    <Routes>
      {/* Default Route - Always Redirect to Login */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Login Route - Redirect if already authenticated */}
      <Route path="/login" element={isAuthenticated ? <RoleBasedRedirect /> : <Login />} />

      {/* Dashboard Route */}
      <Route path="/dashboard" element={<RoleProtectedRoute allowedRole="USER"><Dashboard /></RoleProtectedRoute>} />

      {/* Recruiter Dashboard Route */}
      <Route path="/recruiter-dashboard" element={<RoleProtectedRoute allowedRole="RECRUITER"><RecruiterDashboard /></RoleProtectedRoute>} />

      {/* Customer */}
      <Route path="/customer" element={<RoleProtectedRoute allowedRole="USER"><CustomerHome /></RoleProtectedRoute>} />
      <Route path="/customer/search" element={<RoleProtectedRoute allowedRole="USER"><WorkerSearch /></RoleProtectedRoute>} />
      <Route path="/customer/request" element={<RoleProtectedRoute allowedRole="USER"><RequestForm /></RoleProtectedRoute>} />
      <Route path="/customer/requests" element={<RoleProtectedRoute allowedRole="USER"><MyRequests /></RoleProtectedRoute>} />
      <Route path="/customer/notifications" element={<RoleProtectedRoute allowedRole="USER"><div className="animate-fade-in"><h1 className="text-2xl font-bold mb-4">Notifications</h1><p className="text-muted-foreground">Coming soon — enable Cloud for push notifications</p></div></RoleProtectedRoute>} />
      <Route path="/customer/profile" element={<RoleProtectedRoute allowedRole="USER"><div className="animate-fade-in"><h1 className="text-2xl font-bold mb-4">Profile</h1><p className="text-muted-foreground">Profile management — enable Cloud for data persistence</p></div></RoleProtectedRoute>} />
      <Route path="/customer/support" element={<RoleProtectedRoute allowedRole="USER"><div className="animate-fade-in"><h1 className="text-2xl font-bold mb-4">Support</h1><div className="space-y-3"><a href="https://wa.me/919876543210?text=Hi%2C%20I%20need%20help" target="_blank" rel="noopener noreferrer" className="bg-success/10 text-success p-4 rounded-xl block font-medium hover:bg-success/15"> Chat on WhatsApp</a><a href="tel:+919876543210" className="bg-primary/10 text-primary p-4 rounded-xl block font-medium hover:bg-primary/15"> Call Support: +91 98765 43210</a></div></div></RoleProtectedRoute>} />

      {/* Worker */}
      <Route path="/worker" element={<RoleProtectedRoute allowedRole="USER"><WorkerHome /></RoleProtectedRoute>} />
      <Route path="/worker/requests" element={<RoleProtectedRoute allowedRole="USER"><RequestsInbox /></RoleProtectedRoute>} />
      <Route path="/worker/attendance" element={<RoleProtectedRoute allowedRole="USER"><Attendance /></RoleProtectedRoute>} />
      <Route path="/worker/jobs" element={<RoleProtectedRoute allowedRole="USER"><div className="animate-fade-in"><h1 className="text-2xl font-bold mb-4">Job History</h1><p className="text-muted-foreground">Enable Cloud to view full job history</p></div></RoleProtectedRoute>} />
      <Route path="/worker/profile" element={<RoleProtectedRoute allowedRole="USER"><div className="animate-fade-in"><h1 className="text-2xl font-bold mb-4">Worker Profile</h1><p className="text-muted-foreground">Profile & document upload — enable Cloud for data persistence</p></div></RoleProtectedRoute>} />

      {/* Admin */}
      <Route path="/admin" element={<RoleProtectedRoute allowedRole="admin"><AdminDashboard /></RoleProtectedRoute>} />
      <Route path="/admin/workers" element={<RoleProtectedRoute allowedRole="admin"><WorkersManagement /></RoleProtectedRoute>} />
      <Route path="/admin/customers" element={<RoleProtectedRoute allowedRole="admin"><div className="animate-fade-in"><h1 className="text-2xl font-bold mb-4">Customers</h1><p className="text-muted-foreground">Customer management — enable Cloud for full data</p></div></RoleProtectedRoute>} />
      <Route path="/admin/requests" element={<RoleProtectedRoute allowedRole="admin"><RequestsManagement /></RoleProtectedRoute>} />
      <Route path="/admin/attendance" element={<RoleProtectedRoute allowedRole="admin"><div className="animate-fade-in"><h1 className="text-2xl font-bold mb-4">Attendance Management</h1><p className="text-muted-foreground">Full attendance tracking — enable Cloud for GPS data</p></div></RoleProtectedRoute>} />
      <Route path="/admin/tracking" element={<RoleProtectedRoute allowedRole="admin"><div className="animate-fade-in"><h1 className="text-2xl font-bold mb-4">Live Tracking</h1><p className="text-muted-foreground">Live worker tracking map — enable Cloud + Maps API</p></div></RoleProtectedRoute>} />
      <Route path="/admin/reports" element={<RoleProtectedRoute allowedRole="admin"><div className="animate-fade-in"><h1 className="text-2xl font-bold mb-4">Reports</h1><p className="text-muted-foreground">Reports & exports — enable Cloud for full reporting</p></div></RoleProtectedRoute>} />
      <Route path="/admin/settings" element={<RoleProtectedRoute allowedRole="admin"><div className="animate-fade-in"><h1 className="text-2xl font-bold mb-4">Settings</h1><p className="text-muted-foreground">Platform settings — enable Cloud for configuration</p></div></RoleProtectedRoute>} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
