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
          <div className="float-text flex flex-col items-center gap-y-6 rounded-xl p-2 text-center shadow-lg backdrop-blur-sm">
            {' '}
            <h2 className="font-bold uppercase light">Portfolio</h2>
          </div>
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
        {url && (
          <ArrowTopRightOnSquareIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" />
        )}
      </div>
    </a>
  );
});

export default Portfolio;
