import Header from "../components/Header";
import Reasons from "@/components/Reasons";
import LandingSamples from "@/components/LandingSamples";
import AppSamples from "@/components/AppSamples";
import TryServices from "@/components/TryServices";
import SmothScroll from "@/components/SmothScroll";
import Impact from "@/components/Impact";
export default function Home() {
  return (
    <div className="min-h-screen space-y-20  pb-10">
      <SmothScroll>
        <Header/>
        <Reasons/>
        <Impact/>
        <LandingSamples/>
        <AppSamples/>
        <TryServices/>
      </SmothScroll>
    </div>
  );
}
