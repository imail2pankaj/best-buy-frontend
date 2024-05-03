import ProductCard from '@/components/ProductCard';
import { createClient } from '@/utils/supabase/server';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const Shops = async () => {


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
`);

  const brands = await supabase
    .from('Brands')
    .select();

  return (
    <>
      <section className="section banner pb-lg-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2>Upgrade Your Digital Experience<br />
                <span className="text-color">Unbeatable Deals</span> on Computers and Laptops Await!
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section class=" portfolio ">
        <div class="container">
          <div class="row mb-3 mb-md-5 justify-content-center">
            <div class="col-10 text-center">
              <div class="btn-group btn-group-toggle " data-toggle="buttons">
                <label class="btn active ">
                  <input type="radio" name="shuffle-filter" value="all" checked="checked" />All Brands
                </label>
                {brands.data.map((x) => <label key={x.id} class="btn">
                  <input type="radio" name="shuffle-filter" value={x.id} /> {x.name}
                </label>)}
              </div>
            </div>
          </div>

          <div class="row shuffle-wrapper portfolio-gallery">
            {data.map(async x => <ProductCard key={x.id} product={x} />)}
          </div>
        </div>
      </section>
    </>
  )
}

export default Shops