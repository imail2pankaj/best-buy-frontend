// 'use client'

import { Editor } from '@tinymce/tinymce-react'
import React, { useEffect, useState } from 'react'

const TinyMCEEditor = ({ register, text, setText }) => {

  return (
    <Editor
      apiKey='20xvs9nu3qbumdthahpsg6z3dk2w6aa02bynmi30qvq91l5r'
      id="description"
      name="description"
      value={text}
      onEditorChange={setText}
      {...register("description")}
    />
  )
}

export default TinyMCEEditor