import React, { useCallback } from 'react'
import { Card } from 'react-bootstrap'
import { useDropzone } from 'react-dropzone'

export function MyDropzone({ setFiles }) {
  const onDrop = useCallback(acceptedFiles => {

    for (let i = 0; i < acceptedFiles.length; i++) {
      const file = acceptedFiles[i];
      const reader = new FileReader();

      reader.readAsDataURL(file);
      
      reader.onload = async () => {
        const base64String = reader.result.split(',')[1];
        setFiles((prevFiles) => [...prevFiles, {name:file.name, buffer: base64String}]);
      };
    }

  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <Card className='p-4 my-4'>
      <div className='' {...getRootProps()}>
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag n drop some files here, or click to select files</p>
        }
      </div>
    </Card>
  )
}