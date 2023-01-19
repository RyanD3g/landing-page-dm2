import { useEffect } from 'react';
import scrollreveall from 'scrollreveal';

import './style.scss';

export const Menu = () => {
    useEffect(()=>{
        scrollreveall({ distance: '50px' });
        scrollreveall().reveal('.logo_and_title', { duration: 1500, origin: 'top' });
        scrollreveall().reveal('.title_and_subtitle', { duration:1500, delay: 1000});
        scrollreveall().reveal('.start_now', { duration: 1500, delay: 2500 });
        scrollreveall({ distance: '50px' });
        scrollreveall().reveal('.effect_text', { duration: 1500, delay: 3000, origin:'top' });
        scrollreveall().reveal('.button_orcamento', { duration: 1500, delay: 3000, origin:'left' });

        scrollreveall().reveal('.paint', { duration: 1500, origin:'bottom' });
        scrollreveall().reveal('.build', { duration: 1500, origin:'bottom' });
        scrollreveall().reveal('.energy', { duration: 1500, origin:'bottom' });
        scrollreveall().reveal('.downloads', { duration: 1500, origin:'bottom' });
        scrollreveall().reveal('.repairs', { duration: 1500, origin:'bottom' });
    },[]);
    return(
        <>
         <header className="cabecalho">
            <div className="menu_area">
                <div className='logo_and_title'>
                    <div className='logo'>
                    </div>
                        <h1>DM2</h1>
                        <h5>Reformas em geral</h5>
                </div>
                <div className='title_and_subtitle'>
                    <h1>O SEU <span>SONHO</span> <br></br> DA REFORMA <br></br> <span className='start_now'>COMEÇA AGORA.</span></h1>
                    <h3 className='effect_text'>A DM2 é especializada em manutenção <br></br> predial, pinturas, e reformas em geral</h3>
                </div>
                <div className='button_orcamento'>
                    <button>
                        <a href="https://api.whatsapp.com/send?phone=5511947302292">
                        Fazer Orçamento
                        </a>
                    </button>
                </div>
                <div className='icons_services'>
                    <div className='paint'>
                        <p>Pintura</p>
                    </div>
                    <div className='build'>
                        <p>Construção</p>
                    </div>
                    <div className='energy'>
                        <p>Elétrica</p>
                    </div>
                    <div className='downloads'>
                        <p>Instalação</p>
                    </div>
                    <div className='repairs'>
                        <p>Reparos</p>
                    </div>
                </div>
            </div>
         </header>
        </>
    );
};