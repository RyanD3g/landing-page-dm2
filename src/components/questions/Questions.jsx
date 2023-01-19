import './style.scss';

import ScrollReveal from 'scrollreveal';

import mouse from '../../assets/icons/mouse.png';
import { useEffect } from 'react';

export const Questions = () => {
    useEffect(() => {
        ScrollReveal({ distance: '180px'});
        ScrollReveal().reveal('.icon', { duration: 1700, origin:'left' });
        ScrollReveal().reveal('.title', { duration: 1700, origin:'right' });

        ScrollReveal().reveal('.button_click', { duration: 1700, origin:'bottom' });

        ScrollReveal().reveal('.q-1', { duration: 1700, origin:'left' });
        ScrollReveal().reveal('.q-2', { duration: 1700, origin:'right' });
        ScrollReveal().reveal('.q-3', { duration: 1700, origin:'left' });
    }, []);

    return(
        <>
            <div className='screen-3'>
                <div className='content'>
                    <div className='title_and_icon'>
                        <h1 className='title'>Sua reforma está a um <br></br> <span>click</span> de distância</h1>
                        <img className='icon' src={mouse} alt="" />
                    </div>
                    <div className='button'>
                        <a href="https://api.whatsapp.com/send?phone=5511947302292">
                        <button className='button_click'>
                                Fazer Orçamento
                        </button>
                        </a>
                    </div>
                    <div className='title_questions'>
                        <h1>PERGUNTAS FREQUENTES</h1>

                        <div className='questions'>
                            <div className='q-1'>
                                <h3>Como posso agendar uma vista??</h3>
                                <div className='q'>
                                    <p>Temos diversos meios de comunicação, mas os mais acessiveis são atraves do nosso numero - 11 94730-2292 - Ou do nosso E-mail - dm2reformas@gmail.com</p>
                                </div>
                            </div>
                            <hr />
                            <div className='q-2'>
                                <h3>Preciso pagar pela visita??</h3>
                                <div className='q'>
                                    <p>Não. As visitas são feitas totalmente gratuitas, bastando marcar o dia de agendamento.</p>
                                </div>
                            </div>
                            <hr />
                            <div className='q-3'>
                                <h3>Fazem reformas prediais??</h3>
                                <div className='q'>
                                    <p>Sim. atuamos com reformas e manutenções prediais e residenciais.</p>
                                </div>
                            <hr />
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </>
    );
};