import React, { memo } from "react";
import './footer.scss'
import k from '../../assets/k.svg'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__logo">
          <img src={k} alt="" />
          <p className="footer__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <ul className="footer__list">
          <h3>Contact us</h3>
          <li>
            E:
            <a className="k" href="email:"> info@example.com </a>
          </li>
          <li>
            P:
            <a className="k" href="tel:+947670000000"> +947670000000 </a>
          </li>
          <li>
            A:
            <a className="k" href="address:">123 Hospital rd</a>
          </li>
          <li>
            <a className="k" href="address:">Kalubowila, Dehiwela</a>
          </li>
        </ul>
        <ul className="footer__list">
          <h3>Useful links</h3>
          <li>
            <a className="k" href="#">Shop All </a>
          </li>
          <li>
            <a className="k" href="#"> +Tempered Glass</a>
          </li>
          <li>
            <a className="k" href="#">Back-cover</a>
          </li>
          <li>
            <a className="k" href="#">About Us</a>
          </li>
        </ul>
        <div className="footer__icons">
          <a href="https://www.whatsapp.com/" className="footer__icon__link">
            Whatsapp
          </a>
          <a href="https://www.facebook.com/" className="footer__icon__link">
            Facebook
          </a>
          <a href="https://www.instagram.com/" className="footer__icon__link">
            Instagram
          </a>
          <a href="https://www.tiktok.com/en/" className="footer__icon__link">
            Tik Tok
          </a>
        </div>
      </div>
    </footer>
  )
}

export default memo(Footer);