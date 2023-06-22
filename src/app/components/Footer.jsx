export default function Footer() {
  return (
    <>
      <div className="footer">
        <img className="footer-image" src="/logoPizzaria.png" />
        <p className="footer-escrita">
          A essência DaPizza vem da transparência, da simplicidade,
          <br />
          da força do produto e da sua qualidade palpável.
          <br />
          DaPizza, sua melhor opção na hora de pedir pizza!
        </p>
        <a href="https://www.instagram.com/" target="_blank">
          <i className="fa fa-brands fa-instagram links"></i>
        </a>
        <a href="https://pt-br.facebook.com/" target="_blank">
          <i className="fa fa-brands fa-facebook links"></i>
        </a>
      </div>
    </>
  );
}
