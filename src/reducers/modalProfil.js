// == Import action
import { GET_ONE_FAVORITE } from '../actions/favoritesaction';
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
      // console.log(action.user.data);
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
          technology: action.user.data.languages.split(','),
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
      // console.log(action.user);
      return {
        ...state,
        result: {
          city: action.user.data.UserData.city,
          dev_id: action.user.data.UserData.dev_id,
          firstname: action.user.data.UserData.firstname,
          lastname: action.user.data.UserData.lastname,
          recrut_id: action.user.data.UserData.recrut_id,
          experience: action.user.data.UserData.years_of_experience,
          age: action.user.data.UserData.age,
          email: action.user.data.UserData.email_address,
          emailTest: '',
          zipCode: action.user.data.UserData.zip_code,
          departement: action.user.data.UserData.department,
          phone: action.user.data.UserData.phone,
          technology: action.user.data.UserData.languages.split(','),
          password: action.user.data.UserData.password,
          verifypassword: '',
          portfolio: action.user.data.UserData.portfolio_link,
          description: action.user.data.UserData.description,
          available_for_recruiters: action.user.data.UserData.available_for_recruiters,
          available_for_developers: action.user.data.UserData.available_for_developers,
          github: action.user.data.UserData.github_link,
          salary: action.user.data.UserData.minimum_salary_requested,
          english: action.user.data.UserData.english_spoken,
          availability: '',
          label: action.user.data.UserData.label,
          profilePicture: action.user.data.UserData.profile_picture,
          userId: action.user.data.UserId,
          detailId: action.user.detailId,
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
