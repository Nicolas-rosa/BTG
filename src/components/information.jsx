import React from 'react';

const MoreInformation = () => {
    return (
        <main className="min-h-screen bg-gray-900 text-gray-300 px-4 py-8 relative flex flex-col items-center">
            <div className="fixed inset-0 bg-gradient-to-b from-gray-800 to-gray-900 z-[-1]" aria-hidden="true"></div>

            <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-7xl text-emerald-600 font-bold mb-6 shadow-lg" id="btg-overview-heading">
                    O que é o BTG?
                </h1>

                <p className="text-xl md:text-2xl leading-relaxed mb-8 text-green-400">
                    O Batalhão de Tecnologia para Guerra (BTG) é uma unidade estratégica voltada para o desenvolvimento de soluções tecnológicas aplicadas à defesa e ao combate moderno. Utilizando conhecimentos em programação, segurança da informação, automação e inteligência artificial, o BTG atua na linha de frente da guerra digital.
                </p>

                <img
                    src="https://img.freepik.com/fotos-gratis/3d-rendem-de-um-robo-voando-acima-das-nuvens_1048-3494.jpg?t=st=1744587963~exp=1744591563~hmac=e84fea3e721dcd93502a2f69ceb4ba89657a068c071e320311cf40fca48ed3eb&w=1380"
                    alt="Tecnologia militar"
                    className="w-full rounded-lg shadow-lg mb-10"
                />

                <h2 className="text-4xl md:text-6xl text-emerald-600 font-bold mb-6 shadow-lg">
                    Características do BTG
                </h2>

                <ul className="list-disc list-inside text-xl md:text-2xl leading-relaxed mb-8 text-green-300 text-left">
                    <li><strong>Domínio Tecnológico:</strong> Uso de linguagens de programação, scripts e softwares táticos para fortalecer a infraestrutura digital militar.</li>
                    <li><strong>Defesa Cibernética:</strong> Proteção contra ataques virtuais, espionagem e sabotagem digital com foco em cibersegurança.</li>
                    <li><strong>Automação de Processos:</strong> Criação de ferramentas que aceleram diagnósticos, decisões e respostas em tempo real.</li>
                    <li><strong>Estratégia e Análise:</strong> Uso de dados e algoritmos para mapeamento de ameaças e tomada de decisões estratégicas.</li>
                    <li><strong>Treinamento Especializado:</strong> Formação de soldados programadores e analistas prontos para missões tecnológicas.</li>
                </ul>

                <img
                    src="https://as2.ftcdn.net/v2/jpg/09/21/04/05/1000_F_921040536_dKdI0F4bhn6Shy3uBL6WLME8URJV32py.jpg"
                    alt="Drones militares"
                    className="w-full rounded-lg shadow-lg mb-10"
                />

                <h2 className="text-4xl md:text-6xl text-emerald-600 font-bold mb-6 shadow-lg">
                    A Experiência no BTG
                </h2>

                <p className="text-xl md:text-2xl leading-relaxed mb-8">
                    Servir no BTG é participar de uma revolução silenciosa, onde as batalhas são travadas com lógica, precisão e códigos. Cada linha de programação pode ser uma arma, cada algoritmo pode ser uma estratégia, e cada sistema desenvolvido pode salvar vidas no campo de batalha real.
                </p>

                <img
                    src="https://as2.ftcdn.net/v2/jpg/10/62/00/59/1000_F_1062005955_IkAF67sIBWtzFyhNnuQcPtggWeVdQWPv.jpg"
                    alt="Análise de dados militares"
                    className="w-full rounded-lg shadow-lg mb-10"
                />

                <p className="text-xl md:text-2xl leading-relaxed mb-8">
                    Os soldados do BTG são treinados para pensar, criar e agir em cenários de guerra cibernética. Trabalhamos com ferramentas modernas, atuamos em cooperação com outras áreas militares e temos como missão proteger a soberania nacional na era digital.
                </p>

                <p className="text-xl md:text-2xl leading-relaxed mb-8">
                    Além da atuação prática, o BTG promove o crescimento técnico e pessoal de seus membros, oferecendo um ambiente desafiador, colaborativo e altamente estratégico. Aqui, inovação é rotina, e o conhecimento é uma arma.
                </p>

                <img
                    src="https://plus.unsplash.com/premium_photo-1663089879141-c3ea9c76af09?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Tecnologia militar moderna"
                    className="w-full rounded-lg shadow-lg mb-10"
                />

                <p className="text-xl md:text-2xl leading-relaxed mb-8">
                    Com o avanço da tecnologia, novas frentes de combate surgem. O BTG está na vanguarda, pronto para enfrentar qualquer ameaça virtual com inteligência, disciplina e patriotismo.
                </p>

                <p className="text-xl md:text-2xl leading-relaxed mb-8">
                    Se você acredita no poder da tecnologia como ferramenta de defesa, o BTG é o seu lugar. Faça parte dessa missão e escreva sua história no front digital.
                </p>

                <a href="/Info" className="bg-emerald-600 text-gray-900 font-bold py-3 px-6 rounded hover:bg-emerald-500 transition duration-300">
                    Aliste-se no BTG
                </a>
            </div>
        </main>
    );
};

export default MoreInformation;
