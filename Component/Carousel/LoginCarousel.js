import React, { useState } from 'react';
import css from './LoginCarousel.module.scss';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
} from 'reactstrap';

const items = [
  {
    src: `assets/pic125.jpg`,
    alt: 'not found',

  },
  {
    src: `assets/pic123.png`,
    alt: 'not found',
  },
  {
    src: `assets/pic124.jpg`,
    alt: 'not found',
  },
];

const LoginCarousel = (args) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className={`${css['custom-tag']}`}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />

      </CarouselItem>
    );
  });

  return (
    <>
      <Carousel className='align-items-center img-fluid text-center carousel d-flex h-100'
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
      >
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
    </>
  );
}

export default LoginCarousel;