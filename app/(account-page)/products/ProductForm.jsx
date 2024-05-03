'use client'
import React, { useState, useTransition } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import ValidationError from '@/components/ValidationError'
import { status } from '@/utils/constants'
import { productSchema } from '@/utils/schema'
import TinyMCEEditor from '@/components/TinyMCEEditor'
import { createProduct, updateProduct, uploadMultipleFiles } from './action';
import { randomNumber, slugify } from '@/utils/functions';
import { MyDropzone } from '@/components/MyDropZone';

const ProductForm = ({ product, brands }) => {

  const [text, setText] = useState(product?.description);
  const [files, setFiles] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { isValid, errors }
  } = useForm({
    defaultValues: product,
    mode: 'onChange',
    resolver: yupResolver(productSchema)
  })

  const [isPending, startTransition] = useTransition();

  const onSubmit = handleSubmit(data => {
    startTransition(async () => {
      const slug = slugify(data.title) + "-" + randomNumber();

      if (product?.id) {
        await updateProduct({
          ...data,
          description: text
        });
        uploadMultipleFiles(files, product?.id, slug)
      } else {
        const resp = await createProduct({
          ...data,
          description: text,
          slug
        }).select().single();
        uploadMultipleFiles(files, resp?.id, slug)

      }
    });
  });

  return (
    <Form onSubmit={onSubmit} noValidate autoComplete='off'>
      <FormContent
        register={register}
        text={text}
        setText={setText}
        brands={brands}
        isValid={isValid}
        errors={errors}
        isPending={isPending}
        setFiles={setFiles}
      />
    </Form>
  )
}

export const FormContent = ({ register, errors, isValid, isPending, brands, text, setText, setFiles }) => {

  return (
    <>
      <Row xs={1}>
        <Col>
          <MyDropzone setFiles={setFiles} />
        </Col>
      </Row>
      <Row xs={1} md={3}>
        <Form.Group className="mb-4">
          <Form.Label>Title</Form.Label>
          <Form.Control
            name='title'
            type='text'
            autoFocus
            label='Title'
            {...register("title")}
          />
          <ValidationError errors={errors.title} />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Brand</Form.Label>
          <Form.Select name='brand_id'{...register("brand_id")} aria-label="Default select example">
            {brands.map(brand => <option key={brand.id} value={brand.id}>{brand.name}</option>)}
          </Form.Select>
          <ValidationError errors={errors.brand_id} />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Model</Form.Label>
          <Form.Control
            name='model'
            type='text'
            label='Model'
            {...register("model")}
          />
          <ValidationError errors={errors.model} />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Price</Form.Label>
          <Form.Control
            name='price'
            type='number'
            label='Price'
            {...register("price")}
          />
          <ValidationError errors={errors.price} />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Sale Price</Form.Label>
          <Form.Control
            name='sale_price'
            type='number'
            label='Price'
            {...register("sale_price")}
          />
          <ValidationError errors={errors.sale_price} />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Status</Form.Label>
          <Form.Select name='status' {...register("status")}>
            {status.map(x => <option key={x.id} value={x.id}>{x.name}</option>)}
          </Form.Select>
          <ValidationError errors={errors.status} />
        </Form.Group>
      </Row>
      <Row xs={1}>
        <Form.Group className="mb-4">
          <TinyMCEEditor
            register={register}
            text={text}
            setText={setText} />
        </Form.Group>
      </Row>
      <Button type='submit' disabled={isPending || !isValid}>Submit</Button>
    </>
  )
}
export default ProductForm