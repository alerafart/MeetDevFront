import { GET_ONE_FAVORITE } from '../actions/favorites';
import { FETCH_PROFILE_MODALE } from '../actions/formSearchDev';
import { LOGOUT } from '../actions/settings';

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
  userId: '',
};

const modalProdil = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_PROFILE_MODALE: {
      console.log(action.user.data);
      return {
        ...state,
        result: {
          city: action.user.data.city,
          dev_id: action.user.data.dev_id,
          firstname: action.user.data.firstname,
          lastname: action.user.data.lastname,
          recrut_id: action.user.data.recrut_id,
          experience: action.user.data.years_of_experience,
          age: action.user.data.age,
          email: action.user.data.email_address,
          emailTest: '',
          zipCode: action.user.data.zip_code,
          departement: action.user.data.department,
          phone: action.user.data.phone,
          technology: action.user.data.languages,
          password: action.user.data.password,
          verifypassword: '',
          portfolio: action.user.data.portfolio_link,
          description: action.user.data.description,
          available_for_recruiters: action.user.data.available_for_recruiters,
          available_for_developers: action.user.data.available_for_developers,
          github: action.user.data.github_link,
          salary: action.user.data.minimum_salary_requested,
          english: action.user.data.english_spoken,
          availability: '',
          label: action.user.data.label,
          profilePicture: action.user.data.profile_picture,
        },
        userId: action.user.userId,
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
    case LOGOUT:
      return {
        ...state,
        result: {
        },
      };
    default:
      return state;
  }
};

export default modalProdil;
