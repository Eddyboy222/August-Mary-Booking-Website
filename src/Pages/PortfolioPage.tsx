import Pnavbar from "../Components/Portfolio/Pnavbar";
import PHero from "../Components/Portfolio/PHero";

const drawingData = [
  {
    Pic: "https://res.cloudinary.com/dafafyxbh/image/upload/v1760746608/513971387_18282258943284941_5884217191167997776_n_rnlqkp.jpg",
  },
  {
    Pic: "https://res.cloudinary.com/dafafyxbh/image/upload/v1767312471/555_tvolmp.png",
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
    Pic: "https://res.cloudinary.com/dafafyxbh/image/upload/v1767795404/Untitled_Artwork_3_gvevs4.png",
  },
  {
    Pic: "https://res.cloudinary.com/dafafyxbh/image/upload/v1767795403/Untitled_Artwork_4_ozzqoh.png",
  },
  {
    Pic: "https://res.cloudinary.com/dafafyxbh/image/upload/v1767799335/Untitled-Artwork_2_o03pt1.png",
  },
  {
    Pic: "https://res.cloudinary.com/dafafyxbh/image/upload/v1767799488/Untitled_Artwork_5_ts6srr.png",
  },
  {
    Pic: "https://res.cloudinary.com/dafafyxbh/image/upload/v1767799333/IMG_5788_ojrdwy.png",
  },
  {
    Pic: "https://res.cloudinary.com/dafafyxbh/image/upload/v1767799332/IMG_5774_s3b6ui.jpg",
  },
  {
    Pic: "https://res.cloudinary.com/dafafyxbh/image/upload/v1767799332/IMG_5787_v7e2vv.png",
  },
  {
    Pic: "https://res.cloudinary.com/dafafyxbh/image/upload/v1767800263/Untitled_Artwork_1_picm5u.jpg",
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
