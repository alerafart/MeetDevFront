// == Import npm
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
// == Import component
import Card from './Card';
import ModalProfil from '../ModalProfil';
// == Import action creator
import { searchDev } from '../../actions/formSearchDev';
import { fetchProfile } from '../../actions/middleware';
// == Import styles
import './search.scss';
// == Component
function Search() {
  // To display/notDisplay modal Profil select dev
  const modalDev = useSelector((state) => state.settings.navigation.windowProfil);
  const search = useSelector((state) => state.formSearchDev.search);
  const results = useSelector((state) => state.resultSearch.results);
  const isDark = useSelector((state) => state.settings.navigation.darkMode);
  const logged = useSelector((state) => state.settings.log.logged);
  const count = results.length;
  /*   console.log(results);
  console.log(typeof results); */

  const dispatch = useDispatch();
  // function to change value of formSearchDev state
  function handleChangeForm(e) {
    const { value } = e.target;
    const { name } = e.target;
    dispatch(searchDev(value, name));
  }

  return (
    <>
      { /* if i'm not logged return to home  */ }
      {
        !logged && (<Navigate to="/" />)
      }
      <div className={isDark ? 'wrapper dark' : 'wrapper'}>
        <h2 className="banniere">
          Ma recherche
        </h2>
        <div className={isDark ? 'search dark' : 'search'}>
          {
            modalDev
            && (
            <ModalProfil />
            )
          }

          {/* <h2 className="search__title">
            Filtres de recherche
          </h2> */}
          <form className="search__filter" onChange={handleChangeForm}>
            <div className="search__filter__champ">
              <div className={isDark ? 'search__filter__champ--label dark' : 'search__filter__champ--label'}>
                Ville
              </div>
              <input className="search__filter__champ--input" type="text" name="city" value={search.city} />
            </div>
            {/*  <div className="search__filter__champ">
              <div className="search__filter__champ--label">
                Technologie
              </div>
              <select className="search__filter__champ--input"
              value={search.technology} name="technology">
                <option value="">{null}</option>
                <option value="Symfony" selected>Symfony</option>
                <option value="React">React</option>
                <option value="PHP">PHP</option>
              </select>
            </div> */}
            {/* <div className="search__filter__champ">
            <div className={isDark ? 'search__filter__champ--label dark' :
            'search__filter__champ--label'}>
                Expérience
              </div>
              <div className="search__filter__champ--radio" onChange={handleChangeForm}>
                <label className={isDark ? 'search__filter__champ--radio--item dark' :
                'search__filter__champ--radio--item'} htmlFor="exp1">
                  <input type="radio" value="1" name="experience" defaultchecked={search.
                  experience === '- 1 an'} />
                  - 1 an
                </label>
                <label className={isDark ? 'search__filter__champ--radio--item dark' :
                'search__filter__champ--radio--item'} htmlFor="exp2">
                <input type="radio" value="2" name="experience"
                checked={search.experience === '1 à 3 ans'} />
                  1 à 3 ans
                </label>
                <label className={isDark ?
              'search__filter__champ--radio--item dark' :
              'search__filter__champ--radio--item'} htmlFor="exp3">
              <input type="radio" name="experience" value="3"
              checked={search.experience === '+ 3ans'} />
                  + 3 ans
                </label>
              </div>
            </div> */}
            {/*  <div className="search__filter__champ">
              <div className="search__filter__champ--label">
                Disponibilité
              </div>
              <div className="search__filter__champ--radio" onChange={handleChangeForm}>
                <label className="search__filter__champ--radio--item" htmlFor="immediatly">
                  <input type="radio" value="immediate" name="availability"

                  checked={search.availability === 'immediate'} />
                  Immédiate
                </label>
                <label className="search__filter__champ--radio--item" htmlFor="soon">
                  <input type="radio" value="3 mois" name="availability"
                  checked={search.availability === '3 mois'} />
                  3 mois
                </label>
              </div>
            </div> */}
            { /* button to search developer with filter */}
            <button
              type="submit"
              className="search__filter--button"
              onClick={(e) => {
                e.preventDefault();
                dispatch(fetchProfile());
              }}
            >
              Rechercher
            </button>
          </form>
          <h2 className="search__title">
            {count} développeurs proches de vous
          </h2>

          <div className="result">
            {/* use map to add results */}
            {results.map((user) => (
              <Card
                key={user.userId}
                user={user}
              />
            ))}
            {/* {favoritesArray?.map(
              (favorite) => (

                <Card favorite={favorite} key={favorite.data.id} />

              ),
            )} */}
          </div>

        </div>

      </div>

    </>

  );
}

export default Search;
