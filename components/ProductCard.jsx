import { createClient } from '@/utils/supabase/server';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const ProductCard = async ({ product }) => {
  const supabase = createClient()
  let image = "";
  if (product.Images.length) {
    const resp = await supabase
      .storage
      .from('BestBuyLaptops')
      .createSignedUrls(product.Images.length ? product.Images.splice(0, 1).map(img => img.name) : [], 60);
    image = resp.data[0].signedUrl;
  } else {
    image = "/portfolio/DELL-LATITUDE-E7480.webp";
  }

  return (
    <div class="col-lg-4 col-md-6 col-12 mb-4 shuffle-item" data-groups={product.brand_id}>
      <div class="position-relative inner-box">
        <div class="image position-relative ">
          <Link class="overlay-content" href={`/shops/${product.slug}`}>
            <Image
              src={image}
              loading="lazy"
              height="350"
              width="350"
              alt="portfolio-image"
              class="img-fluid w-100 d-block"
            />
            <div class="overlay-box">
              <div class="overlay-inner">
                <h5 className="mb-0">{product.title}</h5>
                <p>{product.model}</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>

  )
}

export default ProductCard