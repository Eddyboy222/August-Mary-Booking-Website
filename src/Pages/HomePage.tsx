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
      "https://res.cloudinary.com/dafafyxbh/image/upload/v1767312471/555_tvolmp.png",
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
      "https://res.cloudinary.com/dafafyxbh/image/upload/v1767311289/2222_pngeun.png",
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
    name: "Amara C.",
    message:
      "Beautiful work and a smooth process from start to finish. The illustrations brought my ideas to life in the most stylish way.",
  },
  {
    name: "Teni A.",
    message:
      "August Mary has a unique eye for fashion. The illustrations were modern, expressive, and perfectly aligned with my brand.",
  },
  {
    name: "Daniel O.",
    message:
      "The creativity and attention to detail were outstanding. Every piece felt refined and thoughtfully executed.",
  },
  {
    name: "Zara A.",
    message:
      "Exceptional quality and great communication throughout. I’d gladly recommend this atelier to anyone seeking timeless fashion illustrations.",
  },

  {
    name: "Olivia M.",
    message:
      "There’s a quiet confidence in the work that really stands out. Each illustration feels refined, expressive, and uniquely crafted.",
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
