import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import './search.scss';
import Card from './Card';
import ModalProfil from '../ModalProfil';
import { setFromSearchRoute } from '../../actions/settings';
import { searchDev } from '../../actions/formSearchDev';
import { fetchProfile } from '../../actions/middleware';

function Search() {
  const modalDev = useSelector((state) => state.settings.navigation.windowProfil);
  const search = useSelector((state) => state.formSearchDev.search);
  const results = useSelector((state) => state.resultSearch.results);
  const count = results.length;

  const dispatch = useDispatch();

  function handleChangeForm(e) {
    const { value } = e.target;
    const { name } = e.target;
    dispatch(searchDev(value, name));
  }

  useEffect(() => {
    dispatch(setFromSearchRoute());
  }, []);
  return (
    <div className="wrapper">
      <h2 className="banniere">
        Filtres de recherche
      </h2>
      <div className="search">
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
            <div className="search__filter__champ--label">
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
          <div className="search__filter__champ">
            <div className="search__filter__champ--label">
              Expérience
            </div>
            <div className="search__filter__champ--radio" onChange={handleChangeForm}>
              <label className="search__filter__champ--radio--item" htmlFor="exp1">
                <input type="radio" value="1" name="experience" defaultchecked={search.experience === '- 1 an'} />
                - 1 an
              </label>
              <label className="search__filter__champ--radio--item" htmlFor="exp2">
                <input type="radio" value="2" name="experience" checked={search.experience === '1 à 3 ans'} />
                1 à 3 ans
              </label>
              <label className="search__filter__champ--radio--item" htmlFor="exp3">
                <input type="radio" name="experience" value="3" checked={search.experience === '+ 3ans'} />
                + 3 ans
              </label>
            </div>
          </div>
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
          <button
            type="submit"
            className="search__filter--button"
            onClick={(e) => {
              e.preventDefault();
              dispatch(fetchProfile());
            }}
          >
            Filtrer
          </button>
        </form>
        <h2 className="search__title">
          {count} développeurs proches de vous
        </h2>

        <div className="result">
          {/* use map to add results */}
          {results?.map((user) => (
            <Card
              key={user.dev_id}
              user={user}
            />
          ))}
        </div>

      </div>

    </div>

  );
}

export default Search;
