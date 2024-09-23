import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";
import MegaMenu from '../components/MegaMenu';
import Footer from '../components/Footer';
// import ImageSlider from "../components/ImageSlider";
// import Slider from '../components/slider'
// import Images from "../components/Images";
import ImageSlider from '../components/ImageSlider';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// const images = [
//   "http://example.com/image1.jpg",
//   "http://example.com/image2.jpg",
//   "http://example.com/image3.jpg",
// ];

const images = [
  // "https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg",
  // "https://www.biosanas.com.br/app/plugins/Jssor.Slider.FullPack/img/landscape/01.jpg",
  // "https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg",
  "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/10935/1-SM313706.jpg",
  "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/6208/7-SM154538.jpg",
  "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/13164/220-SM453756.jpg",
  "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/5568/20-SM143875.jpg",
  "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/19382/120-SM924035.jpg",
  "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/15752/120-SM715737.jpg",
  "https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/16537/120-SM707983.jpg"
];
// const images = [
//   '/images/image1.jpg'
//   // '/images/image2.jpg',
//   // '/images/image3.jpg',
// ];

export default function Home() {
  return (
    <>
    {/* <div>
      <Link href="/">
        Home
      </Link>
    </div>
    <div>
      <Link href="/about">
        About
      </Link>
    </div>
    <div>
      <Link href="/contactus">
        Contact
      </Link>
    </div>
    <div>
      <Link href="/signin">
        signin
      </Link>
    </div> */}
    {/* <MegaMenu/> */}
    {/* <ImageSlider images={images} />; */}
    {/* <ImageSlider/> */}
    {/* <div className="flex h-screen">
      <Slider images={images} />
    </div> */}
     {/* <main>
        <h1>Simple Image Slider</h1>
        <ImageSlider />
      </main>

      <style jsx>{`
        main {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        }
        img {
          width: 100%;
          height: auto;
          border-radius: 10px;
        }
      `}</style> */}
      <MegaMenu/>
      {/* <Images/> */}
      
      
      <ImageSlider images={images} />
    
    <hr/>
      <Footer/>
  
  </>
);
}


























































    // <div
    //   className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
    // >
    //   <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
    //     <Image
    //       className="dark:invert"
    //       src="https://nextjs.org/icons/next.svg"
    //       alt="Next.js logo"
    //       width={180}
    //       height={38}
    //       priority
    //     />
    //     <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
    //       <li className="mb-2">
    //         Get started by editing{" "}
    //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
    //           pages/index.js
    //         </code>
    //         .
    //       </li>
    //       <li>Save and see your changes instantly.</li>
    //     </ol>

    //     <div className="flex gap-4 items-center flex-col sm:flex-row">
    //       <a
    //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         <Image
    //           className="dark:invert"
    //           src="https://nextjs.org/icons/vercel.svg"
    //           alt="Vercel logomark"
    //           width={20}
    //           height={20}
    //         />
    //         Deploy now
    //       </a>
    //       <a
    //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
    //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Read our docs
    //       </a>
    //     </div>
    //   </main>
    //   <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/file.svg"
    //         alt="File icon"
    //         width={16}
    //         height={16}
    //       />
    //       Learn
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/window.svg"
    //         alt="Window icon"
    //         width={16}
    //         height={16}
    //       />
    //       Examples
    //     </a>
    //     <a
    //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <Image
    //         aria-hidden
    //         src="https://nextjs.org/icons/globe.svg"
    //         alt="Globe icon"
    //         width={16}
    //         height={16}
    //       />
    //       Go to nextjs.org →
    //     </a>
    //   </footer>
    // </div>


