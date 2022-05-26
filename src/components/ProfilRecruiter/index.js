import './recruiterprofil.scss';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { copyProfilRecToTemp } from '../../actions/profilRecModifyTemp';

// import all avatars
import companyAvatar1 from '../../assets/avatars/avatar_company1.png';
import companyAvatar2 from '../../assets/avatars/avatar_company2.png';
import companyAvatar3 from '../../assets/avatars/avatar_company3.png';
import companyAvatar4 from '../../assets/avatars/avatar_company4.png';
import companyAvatar5 from '../../assets/avatars/avatar_company5.png';
import companyAvatar6 from '../../assets/avatars/avatar_company6.png';

function RecruiterProfile() {
  const profilRec = useSelector((state) => state.profilRecruiter);
  const isDark = useSelector((state) => state.settings.navigation.darkMode);
  const data = profilRec.register;
  // console.log(profilRec);
  // // const data = useSelector((state) => state.profilRecruiter.register);
  // const { data } = profilRec;
  const dispatch = useDispatch();

  // useEffect(() => {

  // });

  function handlecopy() {
    dispatch(copyProfilRecToTemp(profilRec));
  }
  // select how avatar to display
  let avatar;
  if (data.profilePicture === 'companyAvatar1') {
    avatar = companyAvatar1;
  }
  if (data.profilePicture === 'companyAvatar2') {
    avatar = companyAvatar2;
  }
  if (data.profilePicture === 'companyAvatar3') {
    avatar = companyAvatar3;
  }
  if (data.profilePicture === 'companyAvatar4') {
    avatar = companyAvatar4;
  }
  if (data.profilePicture === 'companyAvatar5') {
    avatar = companyAvatar5;
  }
  if (data.profilePicture === 'companyAvatar6') {
    avatar = companyAvatar6;
  }
  if (data.profilePicture === '') {
    avatar = '';
  }

  return (

    <div className={isDark ? 'profilrecruiter dark' : 'profilrecruiter'}>
      <h2 className="profilrecruiter__title">
        Mon profil
      </h2>
      <header className="profilrecruiter__header">
        <div className="profilrecruiter__header__cadre">
          <img
            className="profilrecruiter__header__cadre--img"
            src={avatar}
            alt="logo de l'entreprise"
          />
        </div>
        <div className="profilrecruiter__header__about">
          <h3 className="profilrecruiter__header__about--label">
            A Propos
          </h3>
          <div className="profilrecruiter__header__about__item">
            <div className={isDark ? 'profilrecruiter__header__about__item--label dark' : 'profilrecruiter__header__about__item--label'}>
              Entreprise
            </div>
            <div className={isDark ? 'profilrecruiter__header__about__item--firms dark' : 'profilrecruiter__header__about__item--firms'}>{data.firms}
            </div>
          </div>
          <div className="profilrecruiter__header__about__item">
            <div className={isDark ? 'profilrecruiter__header__about__item--label dark' : 'profilrecruiter__header__about__item--label'}>
              Contact
            </div>
            <div className={isDark ? 'profilrecruiter__header__about__item--contact dark' : 'profilrecruiter__header__about__item--contact'}>{data.firstname} {data.lastname}
            </div>
          </div>
          <div className="profilrecruiter__header__about__item">
            <div className={isDark ? 'profilrecruiter__header__about__item--label dark' : 'profilrecruiter__header__about__item--label'}>
              Ville
            </div>
            <div className={isDark ? 'profilrecruiter__header__about__item--city dark' : 'profilrecruiter__header__about__item--city'}>{data.city}
            </div>
          </div>
          <div className="profilrecruiter__header__about__item">
            <div className={isDark ? 'profilrecruiter__header__about__item--label dark' : 'profilrecruiter__header__about__item--label'}>
              Description
            </div>
            <div className={isDark ? 'profilrecruiter__header__about__item--description dark' : 'profilrecruiter__header__about__item--description'}>{data.description}
            </div>
          </div>

        </div>
        {/* <p className="profil__informations--aboutme">About us TODO</p>
          <p className="profil__informations--description">
          Je suis directeur et sales marketing manager des abattoirs d'anderlecht TODO</p> */}

      </header>

      <div className="profilrecruiter__container">
        <div className="profilrecruiter__informations">
          <h3 className="profilrecruiter__informations--label">
            Contact
          </h3>
          <div className="profilrecruiter__informations__item">
            <div className={isDark ? 'profilrecruiter__informations__item--label dark' : 'profilrecruiter__informations__item--label'}> Tél
            </div>
            <div className={isDark ? 'profilrecruiter__informations__item--color dark' : 'profilrecruiter__informations__item--color'}>0{data.phone}
            </div>
          </div>
          {/*           <div className="profilrecruiter__informations__item">
            <div className="profilrecruiter__informations__item--label"> Adresse
            </div>
            <div className="profilrecruiter__informations__item--black">{data.zipCode} {data.city}
            </div>
          </div> */}
          <div className="profilrecruiter__informations__item">
            <div className={isDark ? 'profilrecruiter__informations__item--label dark' : 'profilrecruiter__informations__item--label'}> E-mail
            </div>
            <div className={isDark ? 'profilrecruiter__informations__item--color dark' : 'profilrecruiter__informations__item--color'}>{data.email}
            </div>
          </div>
          <div className="profilrecruiter__informations__item">
            <div className={isDark ? 'profilrecruiter__informations__item--label dark' : 'profilrecruiter__informations__item--label'}> Website
            </div>
            <div className={isDark ? 'profilrecruiter__informations__item--color dark' : 'profilrecruiter__informations__item--color'}>{data.website}
            </div>
          </div>

        </div>
      </div>

      <div className="profilrecruiter__modify">
        <Link to="/modifier">
          <button
            className="profilrecruiter__modify--form"
            type="button"
            onClick={() => {
              console.log(profilRec);
              dispatch(handlecopy());
            }}
          >
            Modifier
          </button>
        </Link>
      </div>
    </div>
  );
}

export default RecruiterProfile;
