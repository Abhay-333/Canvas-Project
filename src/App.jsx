import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [vals, setVals] = useState({
    currentIndex:1,
    maxIndex:422,
  });
  const imageLoaded = useRef(0)
  const imgsObj = useRef([])

  const preloadImages = ()=>{
    for(let i = 0; i <= vals.maxIndex; i++){
      const imgURL = `../Resources/frame_${i.toString().padStart(4, "0")}.jpeg`
      const img = new Image();
      img.src = imgURL
      img.onload = ()=>{
        imageLoaded.current++
        if(imageLoaded.current === vals.maxIndex){
          console.log("all imgs are loaded")
          // show karo pahili image
        }
      }

      imgsObj.current.push(img)
    }
  }

  useEffect(()=>{
   preloadImages() 
  })

  // CurrentIndex and MaxIndex 
  // PreloadImages 
  // loadImages
  // Resizing 
  return (
    <div className='bg-zinc-900 w-full'>
      <div className="h-[400rem] w-full relative">
        <div className="sticky h-screen w-full top-0 left-0">
          <canvas className='w-full h-screen'></canvas>
        </div>
      </div>
    </div>
  )
}

export default App
