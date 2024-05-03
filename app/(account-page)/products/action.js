'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function updateProduct(formData) {
  const supabase = createClient()

  delete formData.Brands;

  const { error } = await supabase
    .from('Products')
    .update(formData)
    .eq('id', formData?.id)
  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/products')
}

export async function createProduct(formData) {
  const supabase = createClient()

  const { error } = await supabase
    .from('Products')
    .insert(formData)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/products')
}


export async function uploadMultipleFiles(files, id, slug) {

  const supabase = createClient()
  for (const file of files) {
    try {
      const { data, error } = await supabase.storage
        .from('BestBuyLaptops')
        .upload(`products/${id}/${slug + file.name}`, Buffer.from(file.buffer, 'base64'));

      if (error) {
        console.error('Error uploading file:', error.message);
      } else {
        // console.log('File uploaded successfully:', data);
        // fileNames.push(data.path)
        const { error } = await supabase
          .from('Images')
          .insert({
            name: data.path,
            type: 1,
            product_id: id,
          })
      }
    } catch (error) {
      console.error('Error uploading file:', error.message);
    }
  }

}