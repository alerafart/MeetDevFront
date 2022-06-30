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

          </div>

        </div>

      </div>

    </>

  );
}

export default Search;
