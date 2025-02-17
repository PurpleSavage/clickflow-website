import Header from "../components/Header";
import Reasons from "@/components/Reasons";
import LandingSamples from "@/components/landingSamples";
export default function Home() {
  return (
    <div className="min-h-screen space-y-20">
      <Header/>
      <Reasons/>
      <LandingSamples/>
    </div>
  );
}
