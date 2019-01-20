const initialState = {
    candidate: {},
    isAuth: false,
    profile: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CANDIDATE':
    console.log('setting candidate...')
    console.log(action.candidate.following)
    console.log(action.candidate.name)
        return {
            ...state,
            isAuth: Object.keys(action.candidate).length > 0 ? true : false,
            candidate: action.candidate
        }
    case 'FOLLOW_CANDIDATE':
    let candidate = Object.assign({}, state.candidate)
    candidate.following.push(action.candidate_id)
    console.log('seeing the candidate')
    console.log(candidate)
    return {
        ...state,
        candidate: candidate
    }
    case 'SET_PROFILE':
    return {
        ...state,
        profile: action.profile
    }
    default:
      return state;
  }
}