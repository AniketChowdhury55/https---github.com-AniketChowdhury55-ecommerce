import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

const HomeSectionCarosel = () => {
   
  const responsive = {
  0: { items: 1 },
  720: { items: 2 },
  1024: { items: 3 },

  };
  const items = [1,1,1,1,1].map((item)=><HomeSectionCarosel/>)
  return (
    <div>
          <AliceCarousel
          items={items}
          disableButtonsControls
          autoPlay
          autoPlayInterval={2000}
          infinite
      />
    </div>
  )
}

export default HomeSectionCarosel
