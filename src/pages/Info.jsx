import React, { useState } from "react";
import Inforaces from "../components/informationraces"; // Se for desnecessário, pode remover

const tecnologiasBTG = [
    {
      index: 'satelites',
      name: 'Satélites de Monitoramento',
      desc: [
        'Utilizados para rastreamento de movimentações hostis em tempo real',
        'Auxiliam na coordenação de tropas e missões de longa distância',
        'Capacidade de vigilância global com imagens de alta resolução',
        'Integração com centros de comando para decisões estratégicas'
      ],
      categoria: 'Seção 01 – Vigilância Orbital'
    },
    {
      index: 'redes_quanticas',
      name: 'Redes Quânticas',
      desc: [
        'Permitem comunicação criptografada à prova de interceptações',
        'Utilizam entrelaçamento quântico para garantir transmissão segura',
        'Aplicadas em operações de alto sigilo e comandos simultâneos',
        'Tecnologia experimental em fase de implantação tática'
      ],
      categoria: 'Seção 02 – Comunicações Avançadas'
    },
    {
      index: 'simulacao_guerra',
      name: 'Simulação de Guerra Digital',
      desc: [
        'Ambientes virtuais que reproduzem cenários reais de combate',
        'Permite o treinamento seguro de operadores em guerra cibernética',
        'Sistema usado para testes de estratégias defensivas e ofensivas',
        'Medição de performance de tropas em situações simuladas'
      ],
      categoria: 'Seção 05 – Treinamento Estratégico'
    },
    {
      index: 'armamento_leve_iot',
      name: 'Armamento Leve com IoT',
      desc: [
        'Armas conectadas em rede com coleta de dados em tempo real',
        'Relatórios automáticos de uso e localização',
        'Ativação e desativação remota em caso de perda',
        'Controle de inventário digitalizado com acesso criptografado'
      ],
      categoria: 'Seção 06 – Engenharia de Armamento Digital'
    },
    {
      index: 'exoesqueletos',
      name: 'Exoesqueletos de Combate',
      desc: [
        'Equipamentos vestíveis que aumentam força e resistência do soldado',
        'Permitem transporte de cargas pesadas em campo',
        'Suporte na recuperação de feridos sob fogo inimigo',
        'Controle adaptativo por sensores musculares'
      ],
      categoria: 'Seção 07 – Robótica Tática'
    },
    {
      index: 'minas_inteligentes',
      name: 'Minas Inteligentes',
      desc: [
        'Capacidade de identificação de veículos e tropas por assinatura térmica',
        'Ativação seletiva com base em padrão de movimentação',
        'Reconfiguráveis via canal seguro de rádio',
        'Seguras contra detonação não autorizada'
      ],
      categoria: 'Seção 09 – Armas Defensivas Automatizadas'
    },
    {
      index: 'camuflagem_ativa',
      name: 'Camuflagem Ativa',
      desc: [
        'Tecnologia de alteração óptica de superfície em tempo real',
        'Disfarce adaptativo com o ambiente natural ou urbano',
        'Redução drástica da assinatura térmica e eletromagnética',
        'Alta eficiência em operações de reconhecimento'
      ],
      categoria: 'Seção 08 – Tecnologias de Ocultamento'
    },
    {
      index: 'biometria_tatica',
      name: 'Biometria Tática',
      desc: [
        'Identificação e autenticação com precisão biométrica',
        'Leitura facial, íris, batimentos e padrão de voz',
        'Aplicável a controle de acesso e autorização de disparo',
        'Alta segurança para ambientes sensíveis e bunkerizados'
      ],
      categoria: 'Seção 04 – Segurança de Identidade'
    },
    {
      index: 'armazenamento_seguro',
      name: 'Armazenamento Seguro de Dados',
      desc: [
        'Servidores com blindagem física e digital',
        'Redundância geográfica com replicação criptografada',
        'Alta disponibilidade para sistemas críticos',
        'Acesso restrito e rastreável'
      ],
      categoria: 'Seção 10 – Infraestrutura Digital Segura'
    },
    {
      index: 'inteligencia_satelital',
      name: 'Inteligência Satelital',
      desc: [
        'Análise de padrões visuais em imagens orbitais com IA',
        'Mapeamento de bases inimigas e rotas logísticas',
        'Composição 3D de terrenos para simulações de ataque',
        'Transmissão contínua para centros de comando móvel'
      ],
      categoria: 'Seção 01 – Vigilância Orbital'
    },
    {
      index: 'sensor_multiespectral',
      name: 'Sensores Multiespectrais',
      desc: [
        'Operação com espectros visíveis, térmicos, infravermelhos e UV',
        'Usados para detecção de minas, trincheiras e emboscadas',
        'Montados em drones, robôs ou veículos blindados',
        'Geram dados para análise automatizada de terreno'
      ],
      categoria: 'Seção 07 – Robótica Tática'
    },
    {
      index: 'rede_malha',
      name: 'Rede Mesh Militar',
      desc: [
        'Conectividade contínua mesmo com falhas de sinal convencionais',
        'Reconfiguração automática em campo',
        'Comunicação entre tropas sem necessidade de torre ou satélite',
        'Alta resiliência em ambientes de interferência'
      ],
      categoria: 'Seção 02 – Comunicações Avançadas'
    },
    {
      index: 'hacktivismo_defensivo',
      name: 'Hacktivismo Defensivo',
      desc: [
        'Respostas organizadas a ataques cibernéticos externos',
        'Bloqueio de espionagem digital e vazamentos de dados',
        'Uso estratégico de contra-inteligência digital',
        'Mobilização de agentes digitais em operações preventivas'
      ],
      categoria: 'Seção 03 – Inteligência Artificial'
    },
    {
      index: 'realidade_aumentada',
      name: 'Realidade Aumentada de Combate',
      desc: [
        'HUD integrado aos óculos e capacetes táticos',
        'Exibição em tempo real de mapa, posição aliada e alerta de ameaça',
        'Identificação automática de alvos no campo visual',
        'Comando por voz e gestos'
      ],
      categoria: 'Seção 03 – Inteligência Artificial'
    },
    {
      index: 'bots_estrategicos',
      name: 'Bots Estratégicos',
      desc: [
        'Unidades robóticas autônomas ou semiautônomas para infiltração',
        'Capacidade de hackeamento local de sistemas adversários',
        'Equipados com câmeras e microfones de longo alcance',
        'Podem atuar em áreas de risco biológico ou químico'
      ],
      categoria: 'Seção 07 – Robótica Tática'
    },
    {
      index: 'municao_inteligente',
      name: 'Munição Inteligente',
      desc: [
        'Capaz de corrigir a trajetória em tempo real com base em sensores',
        'Guiagem por laser ou coordenadas GPS com IA embarcada',
        'Desarmamento remoto em caso de falha',
        'Alta precisão em combates urbanos e zonas de risco'
      ],
      categoria: 'Seção 06 – Engenharia de Armamento Digital'
    },
    {
      index: 'vigilancia_urbana',
      name: 'Vigilância Urbana Avançada',
      desc: [
        'Monitoramento em tempo real de regiões críticas',
        'Integração com bancos de dados de inteligência nacional',
        'Leitura de placas, reconhecimento facial e previsão de rotas',
        'Base para ações de resposta rápida em áreas urbanas'
      ],
      categoria: 'Seção 11 – Operações Urbanas'
    },
    {
      index: 'contra_inteligencia_ai',
      name: 'Contrainteligência com IA',
      desc: [
        'Detecção de anomalias em comunicações e sistemas internos',
        'Classificação automática de dados suspeitos',
        'Rastreamento de comportamentos infiltrados com aprendizado de máquina',
        'Apoio em processos judiciais militares'
      ],
      categoria: 'Seção 03 – Inteligência Artificial'
    },
    {
      index: 'drone_terrestre',
      name: 'Drones Terrestres Autônomos',
      desc: [
        'Operam em terrenos acidentados sem supervisão direta',
        'Equipados com sensores ambientais e câmeras 360°',
        'Capacidade de desarmamento de minas ou sabotagens',
        'Retorno automatizado com dados da missão'
      ],
      categoria: 'Seção 07 – Robótica Tática'
    },
    {
      index: 'gerador_portatil_silencioso',
      name: 'Geradores Portáteis Silenciosos',
      desc: [
        'Fonte de energia elétrica para bases móveis e equipamentos',
        'Tecnologia de baixa emissão térmica e sonora',
        'Compatíveis com baterias militares padrão',
        'Essenciais para missões de longa duração em locais isolados'
      ],
      categoria: 'Seção 12 – Suporte Logístico'
    }
  ];
  

const Detail = ({ item, onClose }) => {
    return (
        <div className="bg-gray-800 p-4 rounded-md shadow-md  top-0 left-0 w- z-10 sticky">
            <h2 className="text-2xl font-bold mb-2 text-emerald-400">{item.name}</h2>
            <p><strong>Categoria:</strong> {item.categoria}</p>
            {item.desc && (
                <ul className="list-disc list-inside text-left mt-2">
                    {item.desc.map((linha, i) => (
                        <li key={i}>{linha}</li>
                    ))}
                </ul>
            )}
            <button onClick={onClose} className="mt-4 bg-green-500 text-white px-4 py-2 rounded">Fechar</button>
        </div>
    );
};

const Info = () => {
    const [selectedItem, setSelectedItem] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = tecnologiasBTG.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-gray-900 text-gray-100 min-h-screen justify-center content-center text-center items-center p-4">
            <h1 className="text-3xl font-bold mb-4 text-emerald-500">Tecnologias de Guerra - BTG</h1>

            <input
                type="text"
                placeholder="Pesquisar tecnologia..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-md mb-4 w-full max-w-md"
            />

            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 relative">
                {filteredData.map((item) => (
                    <li
                        key={item.index}
                        className="bg-gray-800 p-4 rounded-md hover:bg-green-700 cursor-pointer"
                        onClick={() => {
                            if (selectedItem && selectedItem.index === item.index) {
                                setSelectedItem(null);
                            } else {
                                setSelectedItem(item);
                            }
                        }}
                    >
                        <h2 className="text-xl font-semibold text-emerald-300 hover:text-gray-900">
                            {item.name}
                        </h2>
                        {selectedItem && selectedItem.index === item.index && (
                            <Detail item={selectedItem} onClose={() => setSelectedItem(null)} />
                        )}
                    </li>
                ))}
            </ul>

            {/* Se quiser remover isso, pode */}
            <Inforaces />
        </div>
    );
};

export default Info;
