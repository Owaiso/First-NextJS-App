import HeroBanner from "@/components/hero/hero";
import homeImg from "public/home.jpg";

export default function Home() {
  return (
    <>
      <HeroBanner
        imageData={homeImg}
        imgAlt="car factory"
        title="Professional Cloud Hosting"
      />
    </>
  );
}
