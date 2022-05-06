import './inscriptionrecruter.scss';

function InscriptionRecruter() {
  return (
    <div className="inscriptionRecruter">
      <h2 className="inscriptionRecruter__title">
        Mes informations
      </h2>

      <form className="inscriptionRecruter__header">
        <input
          className="inscriptionRecruter__header--avatar"
          type="file"
          name="logo"
        />
        <button type="button" className="inscriptionRecruter__header--button">Logo entreprise</button>
      </form>
      <form className="inscriptionRecruter__form">
        <div className="inscriptionRecruter__form__champ">
          {/* <div className="inscriptionRecruter__form__champ--label">
            Expérience
          </div> */}
          <div className="inscriptionRecruter__form__champ--radio">
            <label className="inscriptionRecruter__form__champ--radio--item" htmlFor="exp1">
              <input checked type="radio" value="sarl" name="sarl" />
              SARL
            </label>
            <label className="inscriptionRecruter__form__champ--radio--item" htmlFor="exp2">
              <input type="radio" value="sas" name="sas" />
              SAS
            </label>
            <label className="inscriptionRecruter__form__champ--radio--item" htmlFor="exp3">
              <input type="radio" value="eurl" name="eurl" />
              EURL
            </label>
          </div>
        </div>
        <div className="inscriptionRecruter__form__champ">
          <div className="inscriptionRecruter__form__champ--label">
            Prénom
          </div>
          <input className="inscriptionRecruter__form__champ--input" type="text" value="VERSION RECRUTER" />
        </div>
        <div className="inscriptionRecruter__form__champ">
          <div className="inscriptionRecruter__form__champ--label">
            Nom
          </div>
          <input className="inscriptionRecruter__form__champ--input" type="text" value="" />
        </div>
        <div className="inscriptionRecruter__form__champ">
          <div className="inscriptionRecruter__form__champ--label">
            Entreprise
          </div>
          <input className="inscriptionRecruter__form__champ--input" type="text" value="" />
        </div>
        <div className="inscriptionRecruter__form__champ">
          <div className="inscriptionRecruter__form__champ--label">
            Ville
          </div>
          <input className="inscriptionRecruter__form__champ--input" type="text" value="" />
        </div>
        <div className="inscriptionRecruter__form__champ">
          <div className="inscriptionRecruter__form__champ--label">
            Tél
          </div>
          <input className="inscriptionRecruter__form__champ--input" type="text" value="" />
        </div>
        <div className="inscriptionRecruter__form__champ">
          <div className="inscriptionRecruter__form__champ--label">
            Site Internet
          </div>
          <input className="inscriptionRecruter__form__champ--input" type="text" value="" />
        </div>
        <div className="inscriptionRecruter__form__champ">
          <div className="inscriptionRecruter__form__champ--label">
            Mail
          </div>
          <input className="inscriptionRecruter__form__champ--input" type="text" value="" />
        </div>
        <div className="inscriptionRecruter__form__champ">
          <div className="inscriptionRecruter__form__champ--label">
            Mdp
          </div>
          <input className="inscriptionRecruter__form__champ--input" type="password" value="" />
        </div>
        <div className="inscriptionRecruter__form__champ">
          <div className="inscriptionRecruter__form__champ--label">
            Vérif Mdp
          </div>
          <input className="inscriptionRecruter__form__champ--input" type="password" value="" />
        </div>
        <div className="inscriptionRecruter__form__buttons">
          <input type="submit" className="inscriptionRecruter__form__buttons__button--valid" value="Valider" />
          <input type="submit" className="inscriptionRecruter__form__buttons__button--cancel" value="Annuler" />
        </div>
      </form>
    </div>
  );
}

export default InscriptionRecruter;
