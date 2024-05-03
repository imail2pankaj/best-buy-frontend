import { createClient } from "@/utils/supabase/server";
import React from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "../ProductCard";

const LatestModels = async () => {

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
`).limit(6);

  return (
    <section className="portfolio ">
      <Container>
        <Row className="mb-3 mb-md-5">
          <div className="col-12">
            <h3>Latest Models</h3>
          </div>
        </Row>

        <div className="row shuffle-wrapper portfolio-gallery home">
          {
            data.map(async x =>
              <ProductCard
                key={x.id}
                product={x}
              />)
          }
        </div>
      </Container>
    </section>
  );
};

export default LatestModels;
