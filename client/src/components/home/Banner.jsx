import { styled } from '@mui/system';  // Correct import statement
import { bannerData } from '../../constants/data';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

const Image = styled('img')(({ theme }) => ({
  width: '100%',
  height: '280px',  // Added 'px' to the height value
  [theme.breakpoints.down('md')]: {
    objectFit: 'cover',
    height: '180px',  // Added 'px' to the height value
  }
}));

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Banner = () => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      keyBoardControl={true}
      slidesToSlide={1}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container"
    >
      {bannerData.map((data) => (
        <Image key={data.id} src={data.url} alt='banner' />
      ))}
    </Carousel>
  );
};

export default Banner;
