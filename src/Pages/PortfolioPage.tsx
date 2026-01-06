import Pnavbar from "../Components/Portfolio/Pnavbar";
import PHero from "../Components/Portfolio/PHero";

const drawingData = [
  {
    Pic: "https://res.cloudinary.com/dafafyxbh/image/upload/v1760746608/513971387_18282258943284941_5884217191167997776_n_rnlqkp.jpg",
  },
  {
    Pic: "https://res.cloudinary.com/dafafyxbh/image/upload/v1760746608/505137624_18279656404284941_4980997270212027287_n_dikagy.jpg",
  },
  {
    Pic: "https://res.cloudinary.com/dafafyxbh/image/upload/v1760746608/500735323_18277331680284941_1311672920469559618_n_eadfpy.jpg",
  },
  {
    Pic: "https://res.cloudinary.com/dafafyxbh/image/upload/v1760746607/474694585_18263624815284941_3593799197767767563_n_b8cmev.webp",
  },
  {
    Pic: "https://res.cloudinary.com/dafafyxbh/image/upload/v1760746608/522681876_18284920876284941_7507482192588424598_n_thjuhu.jpg",
  },
  {
    Pic: "https://res.cloudinary.com/dafafyxbh/image/upload/v1760747177/354424642_867561164703498_2161191697726496672_n_ixroau.jpg",
  },
  {
    Pic: "https://res.cloudinary.com/dafafyxbh/image/upload/v1767727477/Untitled_Artwork_1_uarc7q.png",
  },
  {
    Pic: "https://res.cloudinary.com/dafafyxbh/image/upload/v1760747177/354424642_867561164703498_2161191697726496672_n_ixroau.jpg",
  },
  {
    Pic: "https://res.cloudinary.com/dafafyxbh/image/upload/v1760746608/500735323_18277331680284941_1311672920469559618_n_eadfpy.jpg",
  },
  {
    Pic: "https://res.cloudinary.com/dafafyxbh/image/upload/v1760746607/474694585_18263624815284941_3593799197767767563_n_b8cmev.webp",
  },
  {
    Pic: "https://res.cloudinary.com/dafafyxbh/image/upload/v1760746608/513971387_18282258943284941_5884217191167997776_n_rnlqkp.jpg",
  },
  {
    Pic: "https://res.cloudinary.com/dafafyxbh/image/upload/v1760746608/505137624_18279656404284941_4980997270212027287_n_dikagy.jpg",
  },
  {
    Pic: "https://res.cloudinary.com/dafafyxbh/image/upload/v1760747177/352342323_139696332413341_7837195590897249075_n_wbrhvw.jpg",
  },
  {
    Pic: "https://res.cloudinary.com/dafafyxbh/image/upload/v1760747177/354424642_867561164703498_2161191697726496672_n_ixroau.jpg",
  },
  {
    Pic: "https://res.cloudinary.com/dafafyxbh/image/upload/v1760746608/500735323_18277331680284941_1311672920469559618_n_eadfpy.jpg",
  },
];

function PortfolioPage() {
  return (
    <div>
      <Pnavbar />
      <PHero drawing={drawingData}/>
    </div>
  );
}

export default PortfolioPage;
