'use client'
import React, { useTransition } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm, useFormState } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import ValidationError from '@/components/ValidationError'
import { login } from './action'

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required()
})

const SignInForm = () => {

  const {
    register,
    handleSubmit,
    formState: { isValid, errors }
  } = useForm({
    defaultValues: { email: "imail2pankaj@gmail.com", password: "b2jr2ngb2l!" },
    mode: 'onChange',
    resolver: yupResolver(loginSchema)
  })

  const [isPending, startTransition] = useTransition();

  const onSubmit = handleSubmit(data => {
    startTransition(() => {
      login(data);
    });
  });

  return (
    <Form onSubmit={onSubmit} noValidate autoComplete='off' style={{ width: '350px' }}>
      <FormContent register={register} isValid={isValid} errors={errors} isPending={isPending} />
    </Form>
  )
}
export const FormContent = ({ register, errors, isValid, isPending }) => {

  return (
    <>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <label>Email address</label>
        <Form.Control
          name='email'
          type='email'
          autoFocus
          label='Email'
          {...register("email")}
        />
        <ValidationError errors={errors.email} />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicPassword">
        <label>Password</label>
        <Form.Control
          name='password'
          type='password'
          label='Password'
          {...register("password")}
        />
        <ValidationError errors={errors.password} />
      </Form.Group>
      <Button type='submit' disabled={isPending || !isValid}>Login</Button>
    </>
  )
}
export default SignInForm