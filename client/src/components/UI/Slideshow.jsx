import React, { useState } from 'react';

function Slideshow({ slides }) {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="relative mx-auto my-5 w-full overflow-hidden">
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((slide, i) => (
                    <div key={i} className='flex flex-col w-full h-full flex-shrink-0'>
                        <img src={slide.image} alt={`Slide ${i + 1}`}
                            className="w-full object-fit lg:h-120 shadow-xl"
                        />
                        <p className='mx-auto text-center'>{slide.text}</p>
                    </div>

                ))}
            </div>
            <div
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 px-2 py-1 cursor-pointer"
            >
                <div className='drop-shadow-lg'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-left-circle-fill text-white drop-shadow-xl" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z" />
                    </svg>
                </div>

            </div>
            <div
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2  px-2 py-1 cursor-pointer"
            >
                <div className='drop-shadow-lg'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-right-circle-fill text-white drop-shadow-xl" viewBox="0 0 16 16">
                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z" />
                    </svg>
                </div>
            </div>

        </div>
    );
}

export default Slideshow;
