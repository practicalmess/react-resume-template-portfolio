import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import React, {FC, memo, MouseEvent, useCallback, useEffect, useMemo, useRef, useState} from 'react';

import {isApple, isMobile} from '../../config';
import {portfolioInfo, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  // const [activeIndex, setActiveIndex] = useState<number>(0);
  // const [scrollValue, setScrollValue] = useState(0);
  const [parallaxEnabled, setParallaxEnabled] = useState(false);

  const {src: bgImageSrc, items: portfolioItems} = portfolioInfo;

  const resolveSrc = useMemo(() => {
    if (!bgImageSrc) return undefined;
    return typeof bgImageSrc === 'string' ? bgImageSrc : bgImageSrc.src;
  }, [bgImageSrc]);

  // Mobile iOS doesn't allow background-fixed elements
  useEffect(() => {
    setParallaxEnabled(!(isMobile && isApple));
  }, []);

  // useEffect(() => {
  //   itemWidth.current = scrollContainer.current ? scrollContainer.current.offsetWidth : 0;
  // }, [width]);

  // useEffect(() => {
  //   if (scrollContainer.current) {
  //     const newIndex = Math.round(scrollContainer.current.scrollLeft / itemWidth.current);
  //     setActiveIndex(newIndex);
  //   }
  // }, [itemWidth, scrollValue]);

  // const setTestimonial = useCallback(
  //   (index: number) => () => {
  //     if (scrollContainer !== null && scrollContainer.current !== null) {
  //       scrollContainer.current.scrollLeft = itemWidth.current * index;
  //     }
  //   },
  //   [],
  // );
  // const next = useCallback(() => {
  //   if (activeIndex + 1 === testimonials.length) {
  //     setTestimonial(0)();
  //   } else {
  //     setTestimonial(activeIndex + 1)();
  //   }
  // }, [activeIndex, setTestimonial, testimonials.length]);

  // const handleScroll = useCallback<UIEventHandler<HTMLDivElement>>(event => {
  //   setScrollValue(event.currentTarget.scrollLeft);
  // }, []);

  // useInterval(next, 10000);

  // If no testimonials, don't render the section
  if (!portfolioItems.length) {
    return null;
  }

  return (
    <Section noPadding sectionId={SectionId.Portfolio}>
      <div
        className={classNames(
          'flex w-full items-center justify-center bg-cover bg-center px-4 py-16 md:py-24 lg:px-8',
          parallaxEnabled && 'bg-fixed',
          {'bg-neutral-700': !bgImageSrc},
        )}
        style={{backgroundImage: `url(${resolveSrc}`}}>
        <div className="z-10 w-full max-w-screen-md px-4 lg:px-0">
          <h2 className="self-center text-xl font-bold text-white">Check out some of my work</h2>
          <div
            className={classNames(
              'flex w-full items-center justify-center bg-cover bg-center px-4 py-16 md:py-24 lg:px-8 bg-fixed',
            )}>
            <div className=" w-full columns-2 md:columns-3 lg:columns-4">
              {portfolioItems.map((item, index) => {
                const {title, image} = item;
                return (
                  <div className="pb-6" key={`${title}-${index}`}>
                    <div
                      className={classNames(
                        'relative h-max w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl',
                      )}>
                      <Image alt={title} className="h-full w-full" placeholder="blur" src={image} />
                      <ItemOverlay item={item} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          {/* <div className="flex flex-col items-center gap-y-6 rounded-xl bg-gray-800/60 p-6 shadow-lg">
            <div
              className="no-scrollbar flex w-full touch-pan-x snap-x snap-mandatory gap-x-6 overflow-x-auto scroll-smooth"
              onScroll={handleScroll}
              ref={scrollContainer}>
              {testimonials.map((testimonial, index) => {
                const isActive = index === activeIndex;
                return (
                  <Testimonial isActive={isActive} key={`${testimonial.name}-${index}`} testimonial={testimonial} />
                );
              })}
            </div>
            <div className="flex gap-x-4">
              {[...Array(testimonials.length)].map((_, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    className={classNames(
                      'h-3 w-3 rounded-full bg-gray-300 transition-all duration-500 sm:h-4 sm:w-4',
                      isActive ? 'scale-100 opacity-100' : 'scale-75 opacity-60',
                    )}
                    disabled={isActive}
                    key={`select-button-${index}`}
                    onClick={setTestimonial(index)}></button>
                );
              })}
            </div>
          </div> */}
        </div>
      </div>
    </Section>
  );
});

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item: {url, title, description}}) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Avoid hydration styling errors by setting mobile in useEffect
    if (isMobile) {
      setMobile(true);
    }
  }, []);
  useDetectOutsideClick(linkRef, () => setShowOverlay(false));

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (mobile && !showOverlay) {
        event.preventDefault();
        setShowOverlay(!showOverlay);
      }
    },
    [mobile, showOverlay],
  );

  return (
    <a
      className={classNames(
        'absolute inset-0 h-full w-full  bg-gray-900 transition-all duration-300',
        {'opacity-0 hover:opacity-80': !mobile},
        showOverlay ? 'opacity-80' : 'opacity-0',
      )}
      href={url}
      onClick={handleItemClick}
      ref={linkRef}
      target="_blank">
      <div className="relative h-full w-full p-4">
        <div className="flex h-full w-full flex-col gap-y-2 overflow-y-auto overscroll-contain">
          <h2 className="text-center font-bold text-white opacity-100">{title}</h2>
          <p className="text-xs text-white opacity-100 sm:text-sm">{description}</p>
        </div>
        <ArrowTopRightOnSquareIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" />
      </div>
    </a>
  );
});

// const Testimonial: FC<{testimonial: Testimonial; isActive: boolean}> = memo(
//   ({testimonial: {text, name, image}, isActive}) => (
//     <div
//       className={classNames(
//         'flex w-full shrink-0 snap-start snap-always flex-col items-start gap-y-4 p-2 transition-opacity duration-1000 sm:flex-row sm:gap-x-6',
//         isActive ? 'opacity-100' : 'opacity-0',
//       )}>
//       {image ? (
//         <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16">
//           <QuoteIcon className="absolute -left-2 -top-2 h-4 w-4 stroke-black text-white" />
//           <img className="h-full w-full rounded-full" src={image} />
//         </div>
//       ) : (
//         <QuoteIcon className="h-5 w-5 shrink-0 text-white sm:h-8 sm:w-8" />
//       )}
//       <div className="flex flex-col gap-y-4">
//         <p className="prose prose-sm font-medium italic text-white sm:prose-base">{text}</p>
//         <p className="text-xs italic text-white sm:text-sm md:text-base lg:text-lg">-- {name}</p>
//       </div>
//     </div>
//   ),
// );

export default Portfolio;
