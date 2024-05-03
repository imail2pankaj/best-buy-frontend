
import ProductOwnCarousel from '@/components/ProductOwnCarousel';
import { createClient } from '@/utils/supabase/server';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const ProductDetails = async ({ params: { slug } }) => {

  const supabase = createClient();

  const { data, error } = await supabase
    .from('Products')
    .select(`
  *,
  Brands (
    name 
  ),
  Images (
    name
  )
`).eq("slug", slug).single();

  const resp = await supabase
    .storage
    .from('BestBuyLaptops')
    .createSignedUrls(data.Images.length ? data.Images.map(img => img.name) : [], 60);

  return (
    <>
      <section className="section portfolio-single">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <ProductOwnCarousel images={resp.data} product={data} />
            </div>

            <div className="col-lg-6">
              <div className="project-info">
                <h3 className="mb-4">{data?.title}</h3>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.description,
                  }}
                />
                <div className="price">Rs.{data.price}/-</div>
                <a href={`https://wa.me/9510096523?text=${data.title}`} className="btn btn-main btn-small"><Image src="/wp-icon.png" alt="Logo" height={30} width={30} /> &nbsp; Direct Contact</a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default ProductDetails