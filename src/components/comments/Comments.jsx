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
                        <SplideSlide className='comment_'>
                                <div className='perfil'>
                                    <div className='header'>
                                        <div className='photo'></div>
                                        <h5>Ryan dias</h5>
                                    </div>
                                    <div className='text'>
                                        <p>“Eu fiz uma reforma recente em casa, e a dm2 me ajudou muito!! entregaram no prazo, o serviço ficou excelente e até agora não tive problemas.”</p>
                                    </div>
                                </div>
                        </SplideSlide>
                        <SplideSlide className='comment_'>
                                <div className='perfil'>
                                    <div className='header'>
                                        <div className='photo2'></div>
                                        <h5>Danubia marinho</h5>
                                    </div>
                                    <div className='text'>
                                        <p>“Há três semanas reformei meu apartamento inteiro, troquei o piso e a afiação, ocorreu tudo como o esperado, fui bem atendida e me tiraram todas as dúvidas, o serviço ficou completo!!! Recomendo!!”</p>
                                    </div>
                                </div>
                        </SplideSlide>
                        <SplideSlide className='comment_'>
                                <div className='perfil'>
                                    <div className='header'>
                                        <div className='photo3'></div>
                                        <h5>Danilo Santiago</h5>
                                    </div>
                                    <div className='text'>
                                        <p>“Precisei de uma empresa de manutenções para a minha lanchonete, pois precisava de reparos, fui atendido com imediato e tive meu problema solucionado. Muito bom o serviço!!”</p>
                                    </div>
                                </div>
                        </SplideSlide>
                    </Splide>
                    </div>
                </div>
            </div>
        </>
    );
};