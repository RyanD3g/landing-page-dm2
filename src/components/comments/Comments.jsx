import { Splide, SplideSlide } from '@splidejs/react-splide';

import './style.scss';

export const Comments = () => {
    return(
        <>
            <div className='comments'>
                <div className='container'>
                    <div className='title'>
                        <h1>Conheça  depoimentos de <br></br> quem já experimentou a DM2.</h1>
                    </div>
                    <div className='comment'>
                    <Splide aria-label="My Favorite Images">
                        <SplideSlide className='comment_one'>
                                <div className='perfil'>
                                    <div className='header'>
                                        <div className='photo'></div>
                                        <h5>Ryan dias</h5>
                                    </div>
                                    <div className='text'>
                                        <p>“paçoca paçoca paçoca paçoca paçoca paçoca paçoca paçoca paçoca paçoca paçoca paçoca paçoca paçoca paçoca paçoca paçoca paçoca paçoca paçoca paçoca paçoca paçoca paçoca ”</p>
                                    </div>
                                </div>
                        </SplideSlide>
                        <SplideSlide className='comment_two'>
                        </SplideSlide>
                    </Splide>
                    </div>
                </div>
            </div>
        </>
    );
};