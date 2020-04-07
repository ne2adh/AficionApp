import { 
	SET_SESSION,
	AUTH_CHECKED
} from '../actions/types';

const initial_state = {
	already_logged: false,
    auth_checked: false
}


export default function loginReducer(state = initial_state, action) {	
	switch (action.type) {		
		case SET_SESSION :
			return { ...state, already_logged: true, token: action };
		case AUTH_CHECKED:
			return { ...state, auth_checked: true };
		default: 
      		return state
	}
}