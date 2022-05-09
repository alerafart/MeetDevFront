// styles
import './profil.scss';
import { useState } from 'react';
import ProfilDevModify from './ProfilDevModify';
import ProfilDev from '../ProfilDev';
// import Agathe from '../../assets/images/agathe-feeling.jpg';
// import html from '../../assets/images/html.png';
/* import php from '../../assets/images/php.png';
import css from '../../assets/images/css.png';
import js from '../../assets/images/js.png';
import github from '../../assets/images/github.png';
import portfolio from '../../assets/images/portfolio.jpg'; */

function Profil() {
  const [modifyInformation, setModifyInformation] = useState(false);
  return (
    <>
      {
        modifyInformation && <ProfilDevModify setModifyInformation={setModifyInformation} />
      }
      {
        !modifyInformation && (<ProfilDev />
        )
      }
    </>

  );
}

export default Profil;
