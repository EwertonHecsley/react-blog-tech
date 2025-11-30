import './Footer.css'

export default function Footer() {
    return (
        <footer>
            <section className='box-form'>
                <form action="post">
                    <input type="text" name='name' placeholder='Nome' />
                    <input type="email" name="email" id="" placeholder='Email' />
                    <textarea name="assunto" id="" placeholder='Assunto da mensagem'></textarea>
                    <button type='submit'>Entrar em contato</button>
                </form>
            </section>
            <p>© 2025 Desenvolvedor Ewerton Hecsley. All rights reserved.</p>
        </footer>
    )
}