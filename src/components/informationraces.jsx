import React from 'react';

const Inforaces = () => {
    return (
        <main className="min-h-screen bg-gray-900 text-gray-300 px-4 py-8 relative flex flex-col items-center">
            <div className="fixed inset-0 bg-gradient-to-b from-gray-800 to-gray-900 z-[-1]" aria-hidden="true"></div>

            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-7xl text-green-400 font-bold mb-6 shadow-lg" id="btg-overview-heading">
                    Áreas Estratégicas de Atuação do BTG
                </h1>

                <p className="text-xl md:text-2xl leading-relaxed mb-8 text-green-300">
                    O BTG atua em diversas frentes da guerra digital, desenvolvendo soluções estratégicas que combinam tecnologia, inteligência artificial, automação e ciberdefesa para garantir a soberania nacional em ambientes de conflito cibernético.
                </p>

                <h2 className="text-3xl md:text-5xl text-green-400 font-bold mb-6">Frentes Tecnológicas</h2>

                <ul className="list-disc list-inside mb-8 text-xl md:text-2xl leading-relaxed">
                    <li><strong>Cibersegurança Ativa:</strong> Monitoramento, contenção e resposta imediata a ameaças digitais em tempo real.</li>
                    <li><strong>Automações Estratégicas:</strong> Scripts e sistemas que agilizam decisões táticas e reduzem o tempo de resposta em cenários críticos.</li>
                    <li><strong>Análise de Dados:</strong> Coleta e interpretação de dados para antecipação de ataques e planejamento de defesa.</li>
                    <li><strong>IA Aplicada:</strong> Utilização de inteligência artificial em reconhecimento de padrões, ameaças e apoio à tomada de decisão.</li>
                    <li><strong>Engenharia de Software Militar:</strong> Desenvolvimento de sistemas robustos, confiáveis e otimizados para operações militares.</li>
                    <li><strong>Drones e Robótica:</strong> Reconhecimento autônomo, suporte tático e monitoramento de áreas hostis com equipamentos não-tripulados.</li>
                </ul>

                <h2 className="text-3xl md:text-5xl text-green-400 font-bold mb-6">Perfis Técnicos do BTG</h2>

                <ul className="list-disc list-inside mb-8 text-xl md:text-2xl leading-relaxed">
                    <li><strong>Analista de Defesa Digital:</strong> Especialista em prevenir, detectar e neutralizar ameaças cibernéticas.</li>
                    <li><strong>Programador de Missão:</strong> Responsável por desenvolver ferramentas táticas e lógicas para ações militares automatizadas.</li>
                    <li><strong>Operador de Sistemas Autônomos:</strong> Atua com drones e robôs de reconhecimento e apoio logístico.</li>
                    <li><strong>Engenheiro de Criptografia:</strong> Cria métodos de comunicação segura e codificação de dados sensíveis.</li>
                    <li><strong>Especialista em IA Militar:</strong> Treina e aplica modelos de IA para estratégias de combate e predição de eventos.</li>
                    <li><strong>Técnico em Infraestrutura Segura:</strong> Atua na montagem, manutenção e fortificação de redes militares.</li>
                </ul>

                <p className="text-xl md:text-2xl leading-relaxed mb-8">
                    Cada função dentro do BTG é vital para o sucesso das operações modernas. A integração entre áreas técnicas permite que o batalhão aja com precisão, inteligência e vantagem tática no ambiente digital.
                </p>
            </div>

            {/* Meta Tags for SEO */}
            <meta name="description" content="Conheça as áreas e perfis estratégicos do Batalhão de Tecnologia para Guerra, voltado para inovação e defesa nacional em ambientes digitais." />
            <meta name="keywords" content="BTG, tecnologia militar, guerra digital, cibersegurança, automação, inteligência artificial" />
            <meta name="robots" content="index, follow" />
        </main>
    );
};

export default Inforaces;
