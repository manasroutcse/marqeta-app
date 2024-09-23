import Image from 'next/image';


export default function MyComponent() {
  return (
    <div>
      {/* <Image
        src="/path/to/image.jpg" // Path to your image
        alt="Description of image" // Mandatory alt text for accessibility
        width={500} // Desired width in pixels
        height={300} // Desired height in pixels
      /> */}
      <Image

  src="https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/900x600/20348/300-ER1014762.jpghttps://example.com/image.jpg"
  alt="Description of image"
  layout="responsive" // 'responsive' layout
  width={500}
  height={300}
/>

    </div>
  );
}
