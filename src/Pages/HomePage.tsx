import Navbar from "../Components/Home/Navbar";
import Hero from "../Components/Home/Hero";
import Illustrations from "../Components/Home/Illustrations";
import Steps from "../Components/Home/Steps";
import Testimonials from "../Components/Home/Testimonials";
import Getstarted from "../Components/Home/Getstarted";
import Footer from "../Components/Home/Footer";
import { Pencil, Palette, CheckCircle } from "lucide-react";

const imagesData = [
  {
    picture:
      "https://res.cloudinary.com/dafafyxbh/image/upload/v1760746608/513971387_18282258943284941_5884217191167997776_n_rnlqkp.jpg",
  },
  {
    picture:
      "https://res.cloudinary.com/dafafyxbh/image/upload/v1760746608/505137624_18279656404284941_4980997270212027287_n_dikagy.jpg",
  },
  {
    picture:
      "https://res.cloudinary.com/dafafyxbh/image/upload/v1760746608/500735323_18277331680284941_1311672920469559618_n_eadfpy.jpg",
  },
  {
    picture:
      "https://res.cloudinary.com/dafafyxbh/image/upload/v1760746607/474694585_18263624815284941_3593799197767767563_n_b8cmev.webp",
  },
  {
    picture:
      "https://res.cloudinary.com/dafafyxbh/image/upload/v1760746608/522681876_18284920876284941_7507482192588424598_n_thjuhu.jpg",
  },
  {
    picture:
      "https://res.cloudinary.com/dafafyxbh/image/upload/v1760747177/354424642_867561164703498_2161191697726496672_n_ixroau.jpg",
  },
];

const steps = [
  {
    icon: <Pencil size={28} />,
    title: "1. Share Your Idea",
    description:
      "Tell us what kind of fashion illustration you want — style, theme, and details.",
  },
  {
    icon: <Palette size={28} />,
    title: "2. Get It Illustrated",
    description:
      "Our illustrator brings your concept to life with skill and creativity.",
  },
  {
    icon: <CheckCircle size={28} />,
    title: "3. Approve & Receive",
    description:
      "Review the artwork, request edits if needed, and receive your final illustration.",
  },
];

const testimonialsData = [
  {
    name: "Client 1",
    message:
      "Absolutely stunning illustration! It captured the essence of my brand perfectly.",
  },
  {
    name: "Client 2.",
    message:
      "The attention to detail and fashion aesthetics are just top-notch. Highly recommended!",
  },
  {
    name: "Client 3.",
    message:
      "I’ve worked with several artists, but this was the smoothest experience ever.",
  },
  {
    name: "Client 4.",
    message:
      "Professional, creative, and punctual — my project turned out even better than imagined!",
  },

  {
    name: "Client 5.",
    message:
      "Professional, creative, and punctual — my project turned out even better than imagined!",
  },
];

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Illustrations images={imagesData} />
      <Steps steps={steps} />
      <Testimonials testimonials={testimonialsData} />
      <Getstarted />
      <Footer />
    </div>
  );
}

export default HomePage;
