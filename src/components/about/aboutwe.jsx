import { Splide, SplideSlide } from '@splidejs/react-splide';
import ScrollReveal from 'scrollreveal';

import './style.scss';
// Default theme
import '@splidejs/react-splide/css';

// or other themes
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';

// or only core styles
import '@splidejs/react-splide/css/core';

import studio from '../../assets/img/services/Studio01.jpeg'
import house02 from '../../assets/img/services/house.jpeg'
import { useEffect } from 'react';
import { Benefits } from '../benefits/Benefits';

export const Aboutwe = () => {
    useEffect(() => {
        ScrollReveal({distance: '60px'})
        ScrollReveal().reveal('.title_about', { duration: 1500, origin:'left' });
        ScrollReveal().reveal('.text_about', { duration: 1500, origin:'left' });

         ScrollReveal().reveal('.title_slider', { duration: 1500, origin:'top' });
        ScrollReveal().reveal('.slide', { duration: 1500, origin:'left' });
    }, []);
    return(
        <>
            <div className='screen-2'>
                <article className='title_and_sub'>
                    <div className='title_about'>
                        <h3>CONHEÇA <br></br> A DM2</h3>
                        <div className='line'></div>
                    </div>
                    <div className='text_about'>
                        <p>A Dm2 é uma empresa focada em transformar seus sonhos em realidade. Pensando sempre no gosto do cliente. Estamos localizados na região sul de São Paulo, mas já atuamos por todo estado.</p>
                    </div>
                </article>
                <article className='slider'>
                    <div className='slider_bar'>
                        <div className='title_slider'>
                            <h2>Serviços concluidos</h2>
                        </div>
                            <div className='slide'>
                                <Splide aria-label="My Favorite Images">
                                    <SplideSlide className='slide_img'>
                                        <div className='img3'></div>
                                    </SplideSlide>
                                    <SplideSlide className='slide_img'>
                                        <div className='img4'></div>
                                    </SplideSlide>
                                    <SplideSlide className='slide_img'>
                                        <div className='img5'></div>
                                    </SplideSlide>
                                    <SplideSlide className='slide_img'>
                                        <div className='img6'></div>
                                    </SplideSlide>
                                    <SplideSlide className='slide_img'>
                                        <div className='img7'></div>
                                    </SplideSlide>

                                    <SplideSlide className='slide_img'>
                                        <div className='img'></div>
                                    </SplideSlide>
                                    <SplideSlide className='slide_img'>
                                        <div className='img2'></div>
                                    </SplideSlide>
                                </Splide>
                            </div>
                    </div>
                    <Benefits />
                </article>
            </div>
        </>
    );
};