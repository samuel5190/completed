// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout/DashboardLayout";
import Signup from "./auth/Signup/Signup";
import Login from "./auth/Login/Login";
import PasswordChange from "./auth/PasswordChange/PasswordChange";
import CreateNewPassword from "./auth/CreateNewPassword/CreateNewPassword";
import ResetPassword from "./auth/ResetPassword/ResetPassword";
import Campaign from "./pages/Campaign/Campaign";
import ExploreCampaigns from "./pages/ExploreCampaigns/ExploreCampaigns";
import Track from "./pages/Track/Track";
import Payout from "./pages/Payout/Payout";
import Account from "./pages/Account/Account";
import Dashboard from "./pages/Dashboard/Dashboard";
import CreateCampaign from "./pages/CreateCampaign/CreateCampaign";
import FundraisingPage from "./pages/FundraisingPage/FundraisingPage";
import HomepageLayout from "./layouts/HomepageLayout/HomepageLayout";
import PrivacyCookies from "./pages/PrivacyCookies/PrivacyCookies"; 
import TermsOfUse from "./pages/TermsOfUse/TermsOfUse"; 
import AboutUs from "./pages/AboutUs/AboutUs"; 
import Faqs from "./pages/Faqs/Faqs"; 
import Pricing from "./pages/Pricing/Pricing"; 
import ContactUs from "./pages/ContactUs/ContactUs"; 
import DonorDetails from "./components/DonorDetails/DonorDetails";
import ChangePassword from "./components/ChangePassword/ChangePassword";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomepageLayout />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/passwordchange" element={<PasswordChange />} />
        <Route path="/createpassword" element={<CreateNewPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/fundraising-page/:id" element={<FundraisingPage />} />
        <Route path="/explore-campaigns" element={<ExploreCampaigns />} />
        
        <Route element={<DashboardLayout />} children={[
          <Route path="/dashboard" element={<Dashboard />} />,
          // <Route path="/dashboard" element={< />}/>,
          <Route path="/campaign" element={<Campaign />} />,
          <Route path="/donor" element={<Track />} />,
          <Route path="/donor/details" element={<DonorDetails />} />,
          <Route path="/payout" element={<Payout />} />,
          <Route path="/account" element={<Account />} />,
          <Route path="/campaign/create-campaign" element={<CreateCampaign />} />
        ]} />


        <Route path="/privacy-cookies" element={<PrivacyCookies />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact-us" element={<ContactUs />} />

        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
