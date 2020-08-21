import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/icons8-play-64.png';
import plusIcon from '../assets/static/icons8-más-64.png';

const CarouselItem = ({ cover, title, year, contentRaiting, duration }) => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src={cover} alt={title} />
    <div className='carousel-item__details'>
      <div>
        <img src={playIcon} alt='play' />
        <img src={plusIcon} alt='mas' />
      </div>
      <p className='carousel-item__details--title'>{title}</p>
      <p className='carousel-item__details-subtitle'>
        {`${year} ${contentRaiting} ${duration}`}
      </p>
    </div>
  </div>
);

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRaiting: PropTypes.string,
  duration: PropTypes.number,
};

export default CarouselItem;
