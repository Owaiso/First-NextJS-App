import HeroBanner from "@/components/hero/hero";
import performanceImg from "public/performance.jpg";

export default function PreformancePage() {
  return (
    <HeroBanner
      imageData={performanceImg}
      imgAlt="welding"
      title="We serve high performance applications"
    />
  );
}
