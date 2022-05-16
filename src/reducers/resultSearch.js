import { SAVE_PROFILE } from '../actions/formSearchDev';

export const initialState = {
  results: [],
  /* {
    age: '',
    city: '',
    department: '',
    description: '',
    dev_id: '',
    email_address: '',
    english_spoken: '',
    firstname: '',
    github_link: '',
    languages: '',
    lastname: '',
    minimum_salary_requested: '',
    other_link: '',
    phone: '',
    portfolio_link: '',
    profile_picture: '',
    recrut_id: '',
    years_of_experience: '',
    zip_code: '',
  } */

};

const resultSearch = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PROFILE: {
      return {
        ...state,
        results: action.results,
      };
    }
    default:
      return state;
  }
};

export default resultSearch;
