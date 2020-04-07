import { 
	LOGIN,
	LOGOUT,
	AUTH_CHECKED
} from '../actions/types';

const initial_state = {
	already_logged: false,
    auth_checked: false
}


export default function loginReducer(state = initial_state, action) {	
	switch (action.type) {		
		case LOGIN :
			return { ...state, already_logged: true };
		case LOGOUT:
			return { ...state, already_logged: false };
		case AUTH_CHECKED:
			return { ...state, auth_checked: true };
		default: 
      		return state
	}
}