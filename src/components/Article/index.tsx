import { ArticleStyle } from "./style";
import '../../styles/global.scss';
import CodeBlock from "../CodeBlock";

export const Article = () => {
    return (
        <>
            <ArticleStyle>
                <div className="prose">
                    <h1>Mudanças Climáticas: Um Resumo Completo</h1>
                    <p>
                        As mudanças climáticas referem-se a longos períodos de
                        alterações no clima da Terra, que incluem variações nas
                        temperaturas, padrões de precipitação, ventos e outros
                        fatores climáticos. As mudanças climáticas podem ocorrer
                        de forma natural devido a processos como vulcanismo,
                        variações na órbita da Terra e ciclos solares, mas
                        também podem ser influenciadas pela atividade humana,
                        como a emissão de gases de efeito estufa.
                    </p>

                    <h2>Causas das Mudanças Climáticas:</h2>
                    <ul>
                        <li>
                            Efeito Estufa: A emissão de gases de efeito estufa,
                            como dióxido de carbono (CO2), metano (CH4) e óxido
                            nitroso (N2O), a partir de atividades humanas, como
                            queima de combustíveis fósseis, desmatamento e
                            agricultura, tem contribuído significativamente para
                            o aumento das temperaturas globais.
                        </li>
                        <li>
                            Atividade Solar: Variações na atividade solar, como
                            o ciclo de manchas solares, também podem afetar o
                            clima da Terra.
                        </li>
                    </ul>

                    <h2>Impactos das Mudanças Climáticas:</h2>
                    <ul>
                        <li>
                            Aumento das Temperaturas: O aquecimento global é um
                            dos resultados mais evidentes das mudanças
                            climáticas, levando a temperaturas mais altas em
                            todo o mundo.
                        </li>
                        <li>
                            Mudanças nos Padrões de Precipitação: As mudanças
                            climáticas podem causar secas prolongadas em algumas
                            regiões e aumento das chuvas em outras, levando a
                            problemas de escassez de água e inundações.
                        </li>
                        <li>
                            Elevação do Nível do Mar: O derretimento das calotas
                            de gelo e das geleiras, juntamente com a expansão
                            térmica da água, está contribuindo para a elevação
                            do nível do mar, ameaçando áreas costeiras.
                        </li>
                    </ul>

                    <h2>Consequências para o Meio Ambiente:</h2>
                    <ul>
                        <li>
                            Perda de Biodiversidade: As mudanças climáticas
                            podem afetar a distribuição e o comportamento de
                            plantas e animais, levando à perda de
                            biodiversidade.
                        </li>
                        <li>
                            Acidificação dos Oceanos: A absorção de CO2 pelos
                            oceanos está tornando a água do mar mais ácida,
                            prejudicando os ecossistemas marinhos.
                        </li>
                    </ul>

                    <h2>Impactos Socioeconômicos:</h2>
                    <ul>
                        <li>
                            Aumento de Desastres Naturais: Eventos climáticos
                            extremos, como furacões, incêndios florestais e
                            enchentes, estão se tornando mais intensos e
                            frequentes.
                        </li>
                        <li>
                            Segurança Alimentar: Mudanças nas condições
                            climáticas afetam a produção agrícola, o que pode
                            impactar a segurança alimentar.
                        </li>
                    </ul>

                    <h2>Mitigação e Adaptação:</h2>
                    <p>
                        Mitigação: Isso envolve a redução das emissões de gases
                        de efeito estufa por meio de políticas, tecnologias
                        limpas e práticas sustentáveis.
                    </p>
                    <p>
                        Adaptação: Significa ajustar-se às mudanças climáticas
                        inevitáveis, desenvolvendo infraestrutura resiliente e
                        estratégias de gestão de riscos.
                    </p>

                    <h2>Acordos Internacionais:</h2>
                    <p>
                        O Acordo de Paris (2015) é um acordo internacional que
                        busca limitar o aumento da temperatura global a menos de
                        2 graus Celsius acima dos níveis pré-industriais.
                    </p>

                    <p>
                        É fundamental abordar as mudanças climáticas para
                        proteger o planeta e as gerações futuras. A ação global
                        é necessária para reduzir as emissões de gases de efeito
                        estufa e implementar estratégias de adaptação para
                        enfrentar os desafios das mudanças climáticas.
                    </p>

                    <CodeBlock language="javascript" code={
            `function helloWorld() { console.log('Olá, mundo!'); } helloWorld();`}  />

                </div>
            </ArticleStyle>
        </>
    );
};
