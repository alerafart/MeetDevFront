import './burgerMenu.scss';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import { useEffect } from 'react';
import { burgerMenuOpen } from '../../actions/settings';

function BurgerMenu() {
  const dispatch = useDispatch();

  const closeMenu = () => {
    dispatch(burgerMenuOpen());
  };

  const animateFrom = { opacity: 0, y: -40 };
  const animateTo = { opacity: 1, y: 0 };
  const animateToUl = { animate: { y: 0 } };
  const animateFromUl = { animate: { y: -100 } };

  return (
    <div className="burgerMenu">
      <motion.ul className="burgerMenu__items" initial={animateFromUl} animate={animateToUl} exit={animateFromUl}>
        <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.05 }} className="burgerMenu__items--log" onClick={closeMenu}>Connexion</motion.li>
        <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.05 }} className="burgerMenu__items--item" onClick={closeMenu}><NavLink to="/profil">Mon profil</NavLink></motion.li>
        <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.10 }} className="burgerMenu__items--item" onClick={closeMenu}><NavLink to="/modifier">Modifier profil</NavLink></motion.li>
        <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.15 }} className="burgerMenu__items--item" onClick={closeMenu}><NavLink to="/recherche">Recherche</NavLink></motion.li>
        <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.20 }} className="burgerMenu__items--item" onClick={closeMenu}>Mes favoris</motion.li>
        <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.25 }} className="burgerMenu__items--item" onClick={closeMenu}>Mes messages</motion.li>
        <motion.li initial={animateFrom} animate={animateTo} transition={{ delay: 0.30 }} className="burgerMenu__items--log" onClick={closeMenu}>Deconnexion</motion.li>
      </motion.ul>
    </div>
  );
}

export default BurgerMenu;
