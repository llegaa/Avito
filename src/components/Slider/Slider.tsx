import React, { useEffect, useRef, useState } from 'react';
import * as s from './Slider.module.scss'
import debounce from './debounce';
import {Link} from "react-router-dom";

type CarouselProps = {
    slides: {
        id: number|null,
        url: string
    }[];
}

const Carousel = ({ slides }: CarouselProps) => {
    const rootRef = useRef<HTMLDivElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const containerEl = containerRef.current;
        const el = rootRef.current;

        containerEl?.addEventListener('scroll', debounce(
            () => {
                const newIndex = Math.round(containerEl.scrollLeft / (el?.clientWidth ?? 0));

                setActiveSlide(newIndex);
            }, 200));
    }, []);

    const goToSlide = (index: number) => {
        const containerEl = containerRef.current;
        const el = rootRef.current;

        setActiveSlide(index);

        containerEl?.scrollTo({
            left: (el?.clientWidth ?? 0) * index,
            behavior: "smooth"
        })
    }


    const handleClick = (index: number) => () => goToSlide(index);

    const cn = (...args: string[]) => args.filter(Boolean).join(' ');

    return (
        <div ref={rootRef} className={s.carousel}>
            <div className={s.wrapper}>
                <div ref={containerRef} className={s.container}>
                    {
                        slides.map((slide, index) => (
                            slide.id ? ( <Link to={`/movie/${slide.id}`} key={index} className={s.slide}>
                                <img src={slide.url} alt="постер" loading="lazy"/>
                            </Link>): (<div key={index} className={s.slide}>
                                <img src={slide.url} alt="постер" loading="lazy"/>
                            </div>)
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Carousel;