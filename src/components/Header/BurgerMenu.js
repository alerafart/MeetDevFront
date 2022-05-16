import './burgerMenu.scss';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { useEffect } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { burgerMenuOpen } from '../../actions/settings';

function BurgerMenu() {
  const dispatch = useDispatch();

  const closeMenu = () => {
    dispatch(burgerMenuOpen());
  };

  const animateFrom = { opacity: 0, x: -40 };
  const animateTo = { opacity: 1, x: 0 };

  return (
    <motion.div
      className="burgerMenu"
    >
      <AiOutlineCloseCircle className="burgerMenu__exit" onClick={() => dispatch(burgerMenuOpen())} />

      <motion.ul
        className="burgerMenu__items"
        initial={{ x: '-100vw', opacity: 0.7 }}
        animate={{
          x: 0, opacity: 1,
        }}
        transition={{ duration: 0.3, type: 'tween' }}
      >

        <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.15 }} className="burgerMenu__items--log" onClick={closeMenu}>Connexion</motion.li>
        <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.20 }} className="burgerMenu__items--item" onClick={closeMenu}><NavLink to="/profil">Mon profil</NavLink></motion.li>
        <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.25 }} className="burgerMenu__items--item" onClick={closeMenu}><NavLink to="/modifier">Modifier profil</NavLink></motion.li>
        <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.30 }} className="burgerMenu__items--item" onClick={closeMenu}><NavLink to="/recherche">Recherche</NavLink></motion.li>
        <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.35 }} className="burgerMenu__items--item" onClick={closeMenu}>Mes favoris</motion.li>
        <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.40 }} className="burgerMenu__items--item" onClick={closeMenu}>Mes messages</motion.li>
        <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.45 }} className="burgerMenu__items--log" onClick={closeMenu}>Deconnexion</motion.li>
      </motion.ul>
      <div className="burgerMenu__opacity" onClick={() => dispatch(burgerMenuOpen())}> </div>
    </motion.div>
  );
}

export default BurgerMenu;
