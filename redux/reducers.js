const INITIAL_STATE = {
    screen: 'home',
    plans: {
        'Plan #1': 'Plan 1 name',
        'Plan #2': 'Plan 2 name',
        'Plan #3': 'Plan 3 name'
    },
    photos: {
        'Plan #3': [
            "https://www.socialinnovationacademy.eu/wp-content/uploads/2018/06/cities.png",
            "https://static.toiimg.com/thumb/msid-38487526,width-748,height-499,resizemode=4,imgsize-248462/.jpg",
            "https://i.insider.com/5b9137e10ce5f5b27e8b4a0c?width=600&format=jpeg&auto=webp"
        ]
    },
    statuses: {
        'Plan #1': 'not-done',
        'Plan #2': 'done',
        'Plan #3': 'done-with-photos'
    }
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CHANGE_SCREEN':
            return {
                ...state,
                screen: action.payload
            }

        case 'CHANGE_PLAN_STATUS':
            return {
                ...state,
                statuses: {
                    ...state.statuses,
                    [action.payload.plan]: action.payload.status
                }
            }

        case 'ADD_PLAN':
            return {
                ...state,
                plans: {
                    ...state.plans,
                    'newPlan': action.payload
                },
                statuses: {
                    ...state.statuses,
                    'newPlan': 'not-done'
                }
            }
        default:
            return state;
    }
}

export default reducer;
