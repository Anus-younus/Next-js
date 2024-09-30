"use client"
import { storage } from '@/firebase/firebase.storage'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { useState } from 'react'
import Image from 'next/image'

export default function App() {
  const [file, setFile] = useState<File>()
  const [errorMsg, setErrorMsg] = useState("")
  const [progress, setProgress] = useState<number | null>(null)
  const [imageURL, setImageURL] = useState("")

  const uploadImage = () => {
    if (!file) {
      setErrorMsg("first select an image.");
      return;
    }
    setErrorMsg("");
    console.log(file);
    try {
      const imageRef = ref(storage, `images/${file?.name}`)
      const uploadTask = uploadBytesResumable(imageRef, file as File)
      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          setProgress(progress)
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref)
            .then((downloadURL) => {
              console.log('File available at', downloadURL);
              setImageURL(downloadURL)
            })
            .catch((e) => {
              console.log(e);
            })
        }
      );
    } catch (e) {

    }
  }
  return (
    <>
      <input type="file" onChange={(e) => {
        const files = e.target.files
        files && setFile(files[0])
      }} />
      <button onClick={uploadImage}>Upload image</button>
      {errorMsg && <p>{errorMsg}</p>}
      {progress && <p>Uplode is {progress}%done</p>}
      <Image src={imageURL? imageURL: ""} alt={''} width={"300"} height={"100"} />
    </>
  )
}