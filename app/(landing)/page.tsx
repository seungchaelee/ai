import { LandingHero } from "@/components/landig-hero";
import { LandigContent } from "@/components/landing-content";
import { LandingNavbar } from "@/components/landing-navbar";

const LandingPage = () => {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandigContent />
    </div>
  );
};

export default LandingPage;
