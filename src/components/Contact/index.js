// styles
import './contact.scss';

function Contact() {
  return (
    <section className="contact-wrap">
      <form action="" className="contact__form">
        <h3 className="contact__form--title">Contact</h3>
        <div className="col-sm-6">
          <div className="contact__form--input">
            <input type="text" className="contact__form--control" placeholder="Prénom" maxLength="30" />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="contact__form--input">
            <input type="text" className="contact__form--control" placeholder="Nom" maxLength="30" />
          </div>
        </div>
        <div className="col-sm-12">
          <div className="contact__form--input">
            <input type="email" className="contact__form--control" placeholder="Email" maxLength="40" />
          </div>
        </div>
        <div className="col-sm-12">
          <div className="contact__form--input">
            <input type="text" placeholder="Sujet" className="contact__form--control" maxLength="40" />
          </div>
        </div>
        <div className="col-sm-12">
          <div className="contact__form--input textarea">
            <textarea rows="5" type="text" placeholder="Votre message" className="contact__form--control" maxLength="255" />
          </div>
        </div>
        <div className="col-sm-12">
          <button type="button" className="contact__form--button">Envoyer</button>
        </div>
      </form>
    </section>

  );
}

export default Contact;
