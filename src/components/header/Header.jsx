import './Header.css'

export default function Header() {
    return (
        <header>
            <section className='box-header'>
                <div className='box-header-content'>
                    <h1>Encontre os <span>melhores artigos </span>
                        de programação em um só lugar
                    </h1>
                    <p>Explore o topo da programação em um só lugar!
                        Seu destino único para dicas e tendências atuais.</p>
                    <button>BUSCAR ARTIGOS</button>
                </div>
                <div className='box-header-image'>
                    <img src="src/assets/image.png" alt="" />
                </div>
            </section>
        </header>
    )
}