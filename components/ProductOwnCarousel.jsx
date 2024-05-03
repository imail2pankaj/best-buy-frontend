'use client'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Image from 'next/image';

export default function ProductOwnCarousel ({images, product}) {

  return (
    <OwlCarousel items={1} autoPlay={false} dots={false} autoplayTimeout={8000} loop nav>
      {images.map((img, index) => <div key={index} className="item">
        <Image src={img.signedUrl} alt={product?.title} height={350} width={350} className="img-fluid w-100" />
      </div>)}
    </OwlCarousel>
  )
}