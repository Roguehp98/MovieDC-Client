import React, { Component } from 'react';
import { Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption} from 'reactstrap';
import shazam_poster from '../img/shazam_poster.jpg';
import aquaman_poster from '../img/aquaman_poster.jpg';
import pikachu_poster from '../img/pikachu_poster.jpg';


const items = [
    {
      src: `${shazam_poster}`,
      altText: 'SHAZAM',
      caption: 'SHAZAM',
      marketing: 'Now playing'
    },
    {
      src: `${aquaman_poster}`,
      altText: 'Aquaman',
      caption: 'AQUAMAN',
      marketing: 'Now available on Digital. Pre-order 4K/Blu-ray/DVD (3/26)'
    },
    {
      src: `${pikachu_poster}`,
      altText: 'POKÉMON DETECTIVE PIKACHU',
      caption: 'POKÉMON DETECTIVE PIKACHU',
      marketing: 'In Theaters May 10'
    }
  ];

class Carousels extends Component {
   constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
          className="custom-tag"
        >
          <img src={item.src} alt={item.altText} className="poster"/>
          <CarouselCaption captionText={item.marketing} captionHeader={item.caption} className="text-left"/>
        </CarouselItem>
      );
    });

    return (
      <div>
        <style>
          {
            `.custom-tag {
                max-width: 100%;
                height: 500px;
                background: black;
              },
            `
          }
        </style>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
      
    );
  }
}


export default Carousels;