import React from 'react';
import { Link } from 'react-router-dom';
import MoreInformation from '../components/information';

const Button = ({ to, children, ...rest }) => {
    const Component = to ? Link : 'button';
    return (
        <Component
            to={to}
            className="bg-emerald-950 text-green-400 border border-emerald-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
            {...rest}
        >
            {children}
        </Component>
    );
};

const Home = () => {
    return (
        <main className="min-h-screen bg-gray-900 text-gray-300 px-4 py-8 relative flex flex-col items-center justify-center">
            <div className="fixed inset-0 bg-gradient-to-b from-gray-800 to-gray-900 z-[-1]" aria-hidden="true"></div>

            <h1 className="text-4xl md:text-6xl text-emerald-500 font-bold mb-4 shadow-lg" id="welcome-heading">
                Bem-vindo ao BTG
            </h1>

            <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-8 text-green-400">
                Este portal foi criado para apresentar o Batalhão de Tecnologia para Guerra — uma unidade especializada no combate digital e na aplicação da tecnologia em estratégias de defesa.
            </p>
          
            <p className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-8">
                <strong className='text-red-600'>INFORMAÇÕES</strong>: Descubra como o BTG opera, suas áreas de atuação e os pilares que sustentam a guerra cibernética. <br /><br />
                <strong className='text-red-600'>CONTATO</strong>: Envie seu feedback ou entre em contato com a equipe responsável pelo desenvolvimento do sistema.
            </p>

            <Button to="/Info">Explorar o BTG</Button>

            <MoreInformation />
        </main>
    );
};

export default Home;
