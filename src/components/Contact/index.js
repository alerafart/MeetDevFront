// == Import npm
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// == Import action creator
import { sendMessage } from '../../actions/formContact';
import { setFromAway } from '../../actions/settings';
// == Import Style
import './contact.scss';
// == Component
function Contact() {
  // function to have the state formContact
  const message = useSelector((state) => state.formContact.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFromAway());
  }, []);

  // function to change value of the state formContact
  function handleChangeForm(e) {
    const { value } = e.target;
    const { name } = e.target;
    dispatch(sendMessage(value, name));
  }
  // function to have a captcha (number and letter) to protect the website with the bot
  const captcha = (Math.random() + 1).toString(36).substring(7);

  return (
    <section className="contact-wrap">
      <form action="" className="contact__form">
        <h3 className="contact__form--title">Contact</h3>
        <div className="col-sm-6">
          <div className="contact__form--input">
            <input
              type="text"
              className="contact__form--control"
              placeholder="Prénom"
              maxLength="30"
              name="firstname"
              value={message.firstname}
              onChange={handleChangeForm}
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="contact__form--input">
            <input
              type="text"
              className="contact__form--control"
              placeholder="Nom"
              maxLength="30"
              name="lastname"
              value={message.lastname}
              onChange={handleChangeForm}
            />
          </div>
        </div>
        <div className="col-sm-12">
          <div className="contact__form--input">
            <input
              type="email"
              className="contact__form--control"
              placeholder="Email"
              maxLength="40"
              name="mail"
              value={message.mail}
              onChange={handleChangeForm}
            />
          </div>
        </div>
        <div className="col-sm-12">
          <div className="contact__form--input">
            <input
              type="text"
              placeholder="Sujet"
              className="contact__form--control"
              maxLength="40"
              name="subject"
              value={message.subject}
              onChange={handleChangeForm}
            />
          </div>
        </div>
        <div className="col-sm-12">
          <div className="contact__form--input textarea">
            <textarea
              rows="5"
              type="text"
              placeholder="Votre message"
              className="contact__form--control"
              maxLength="255"
              name="content"
              value={message.content}
              onChange={handleChangeForm}
            />
          </div>
        </div>
        <div className="col-sm-12">
          <div className="contact__form--captcha">{captcha}</div>
          <div className="contact__form--input">
            {/* TODO compare captcha and input, if the word is the same
            enable button Envoyer else disable button */}
            <input className="contact__form--control" type="text" placeholder="Recopier le captcha" name="captcha" id="captcha" />
          </div>
        </div>
        <div className="col-sm-12">

          <button type="button" className="contact__form--button">Envoyer</button>
        </div>
        {/* link on button Retour to come back at home page */}
        <Link to="/">
          <button
            type="button"
            className="inscription__form__buttons__button--cancel"
            // onClick={() => {
            //   dispatch(logout());
            // }}
          >Retour
          </button>
        </Link>
      </form>
    </section>

  );
}

export default Contact;
