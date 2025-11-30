import "./Content.css"

export default function Content() {
    return (
        <main>
            <section className="box-content">
                <h2>Artigos Recomendados</h2>
                <div className="box-content-cards">
                    <div className="card">
                        <img src="src/assets/cards/card1.png" alt="card1" />
                        <h3>O que é linguagem de programação? Conheça as principais</h3>
                        <p>Uma das mais populares vertentes da tecnologia da informação, a área de...</p>
                    </div>
                    <div className="card">
                        <img src="src/assets/cards/card2.png" alt="card2" />
                        <h3>Python: por que a linguagem é tão usada para Data Science e finanças?</h3>
                        <p>O mundo da programação conta com algumas opções de linguagem para...</p>
                    </div>
                    <div className="card">
                        <img src="src/assets/cards/card3.png" alt="card3" />
                        <h3>GitHub tem receita de US$ 1 bilhão e 90 milhões de usuários</h3>
                        <p>O popular serviço de repositório de código GitHub foi adquirido pela...</p>
                    </div>
                </div>
                <div className="box-content-cards">
                    <div className="card">
                        <img src="src/assets/cards/card4.png" alt="card4" />
                        <h3>15 comandos no GIT que os desenvolvedores precisam saber</h3>
                        <p>Dominar os comandos GIT é uma habilidade que se conquista com...</p>
                    </div>
                    <div className="card">
                        <img src="src/assets/cards/card5.png" alt="card5" />
                        <h3>GIT e GitHub: o que são e quais as diferenças entre eles?</h3>
                        <p>Git e GibHub são dois softwares de controle de versão essenciais para...</p>
                    </div>
                    <div className="card">
                        <img src="src/assets/cards/card6.png" alt="card6" />
                        <h3>GitHub Copilot ganha integração com GPT-4 e interface conversacional</h3>
                        <p>O GitHub Copilot, ferramenta de desenvolvimento baseada em IA...</p>
                    </div>
                </div>
            </section>
        </main>
    )
}