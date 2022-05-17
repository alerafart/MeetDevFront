import { GET_ONE_FAVORITE } from '../actions/favorites';
import { FETCH_PROFILE_MODALE } from '../actions/formSearchDev';

export const initialState = {
  result: {
    firstname: '',
    lastname: '',
    age: '',
    email: '',
    emailTest: '',
    city: '',
    zipCode: '',
    departement: '',
    phone: '',
    technology: [],
    experience: '',
    password: '',
    verifypassword: '',
    portfolio: '',
    description: '',
    available_for_recruiters: '',
    available_for_developers: '',
    github: '',
    salary: '',
    english: '',
    availability: '',
    label: '',
    profilePicture: '',
  },
};

const modalProdil = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_PROFILE_MODALE: {
      console.log(action.user);
      return {
        ...state,
        result: {
          city: action.user.city,
          dev_id: action.user.dev_id,
          firstname: action.user.firstname,
          lastname: action.user.lastname,
          recrut_id: action.user.recrut_id,
          experience: action.user.years_of_experience,
          age: action.user.age,
          email: action.user.email_address,
          emailTest: '',
          zipCode: action.user.zip_code,
          departement: action.user.department,
          phone: action.user.phone,
          technology: action.user.languages,
          password: action.user.password,
          verifypassword: '',
          portfolio: action.user.portfolio_link,
          description: action.user.description,
          available_for_recruiters: action.user.available_for_recruiters,
          available_for_developers: action.user.available_for_developers,
          github: action.user.github_link,
          salary: action.user.minimum_salary_requested,
          english: action.user.english_spoken,
          availability: '',
          label: action.user.label,
          profilePicture: action.user.profile_picture,
        },
      };
    }
    case GET_ONE_FAVORITE: {
      console.log(action.user);
      return {
        ...state,
        result: {
          city: action.user.city,
          dev_id: action.user.dev_id,
          firstname: action.user.firstname,
          lastname: action.user.lastname,
          recrut_id: action.user.recrut_id,
          experience: action.user.years_of_experience,
          age: action.user.age,
          email: action.user.email_address,
          emailTest: '',
          zipCode: action.user.zip_code,
          departement: action.user.department,
          phone: action.user.phone,
          technology: action.user.languages,
          password: action.user.password,
          verifypassword: '',
          portfolio: action.user.portfolio_link,
          description: action.user.description,
          available_for_recruiters: action.user.available_for_recruiters,
          available_for_developers: action.user.available_for_developers,
          github: action.user.github_link,
          salary: action.user.minimum_salary_requested,
          english: action.user.english_spoken,
          availability: '',
          label: action.user.label,
          profilePicture: action.user.profile_picture,
        },
      };
    }
    default:
      return state;
  }
};

export default modalProdil;
