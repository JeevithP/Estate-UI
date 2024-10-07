import { useState } from 'react';
import './slider.scss'

function Slider({images}){
  const [imageIndex, setImageIndex] = useState(null);
  return (
    <div className='slider'>
      {imageIndex!==null && (<div className="fullSlider">
          <div className="arrow" onClick={()=>{
            let temp=imageIndex-1;
            if(temp<0) temp=3;
            setImageIndex(temp);
          }} >
            <img src="/arrow.png" alt="" />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow" onClick={()=>setImageIndex((imageIndex+1)%4)}>
            <img src="/arrow.png" className="right" alt="" />
          </div>
          <div className="close" onClick={()=>setImageIndex(null)}>
            X
          </div>
      </div>)}
      <div className="bigImage" onClick={()=>setImageIndex(0)}>
        <img src={images[0]} alt="" />
      </div>
      <div className="smallImages">
        {images.slice(1).map((image,index)=>(
          <img src={image} alt='' key={index} onClick={()=>setImageIndex(index+1)}/>
        ))}
      </div>
    </div>
  )
}

export default Slider