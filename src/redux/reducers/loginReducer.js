import { 
	SET_SESSION,
	AUTH_CHECKED
} from '../actions/types';

const initial_state = {
    auth_checked: false
}


export default function loginReducer(state = initial_state, action) {	
	switch (action.type) {		
		case SET_SESSION : 
			return {
				...state,
				token: action
			}
		case AUTH_CHECKED:
			return { 
				...state, 
				auth_checked: true 
			};
		default: {
      		return state
    	}
	}
}