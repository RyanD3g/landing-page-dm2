import './style.scss';

import ScrollReveal from 'scrollreveal';

import relogy from '../../assets/icons/relogio.png';
import house from '../../assets/icons/casa.png';
import { useEffect } from 'react';

export const Benefits = () => {

    useEffect(() => {
        ScrollReveal({ distance: "80px"})
        ScrollReveal().reveal('.block_one', { duration: 1700, origin: 'left' });
        ScrollReveal().reveal('.block_two', { duration: 1700, origin: 'right' });
    }, []);

    return(
        <>
            <div className='benefits'>
            <button className='block_one'>
                <div className='image'>
                    <img src={relogy} alt="" />
                    <h3>Prazo e <br></br>qualidade</h3>
                    <p> prezamos pela qualidade de <br></br> serviço e satisfação do cliente, <br></br> sempre cumprindo o prazo constituido</p>
                </div>
                <div className='bg-blue'>
                </div>
            </button>
            <button className='block_two'>
                <div className='image'>
                    <img src={house} alt="" />
                    <h3>Serviço<br></br>completo</h3>
                    <p> Trabalhamos com mão de obra <br></br> especializada e preparada para qualquer desafio, desde pequenos reparos á grandes projetos</p>
                </div>
                <div className='bg-blue'>
                </div>
            </button>
            </div>
        </>
    );
};