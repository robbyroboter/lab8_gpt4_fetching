import AdminHeader from "../../components/admin/AdminHeader";
import AdminHero from "../../components/admin/AdminHero";
import AdminBrands from "../../components/admin/AdminBrands";
import AdminFutureHere from "../../components/admin/AdminFutureHere";
import AdminWhatIsChatGpt from "../../components/admin/AdminWhatIsChatGpt";

import HeroContextProvider from "../../contexts/admin/HeroContext";
import HeaderContextProvider from "../../contexts/admin/HeaderContext";
import FutureHereContextProvider from "../../contexts/admin/FutureHereContext";
import BrandsContextProvider from "../../contexts/admin/BrandsContext";
import WhatIsChatGptContextProvider from "../../contexts/admin/WhatIsChatGptContext";
import VrContextProvider from "../../contexts/admin/VrContext";
import AdminVr from "../../components/admin/AdminVr";
import PurpleContextProvider from "../../contexts/admin/PurpleContext";
import AdminPurple from "../../components/admin/AdminPurple";
import HappensBlogContextProvider from "../../contexts/admin/HappensBlogContext";
import AdminHappensBlog from "../../components/admin/AdminHappensBlog";
import FooterContextProvider from "../../contexts/admin/FooterContext";
import AdminFooter from "../../components/admin/AdminFooter";

const AdminHome = () => {
  return (
    <div>
      <HeaderContextProvider>
        <AdminHeader />
      </HeaderContextProvider>
      <HeroContextProvider>
        <AdminHero />
      </HeroContextProvider>
      <BrandsContextProvider>
        <AdminBrands />
      </BrandsContextProvider>
      <WhatIsChatGptContextProvider>
        <AdminWhatIsChatGpt />
      </WhatIsChatGptContextProvider>
      <FutureHereContextProvider>
        <AdminFutureHere />
      </FutureHereContextProvider>
        <VrContextProvider>
            <AdminVr />
        </VrContextProvider>
        <PurpleContextProvider>
            <AdminPurple />
        </PurpleContextProvider>
        <HappensBlogContextProvider>
            <AdminHappensBlog />
        </HappensBlogContextProvider>
        <FooterContextProvider>
            <AdminFooter />
        </FooterContextProvider>
    </div>
  );
};

export default AdminHome;
