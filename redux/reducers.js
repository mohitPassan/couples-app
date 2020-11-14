const INITIAL_STATE = {
    screen: 'home',
    uploadModalOpen: false,
    planToUploadImagesTo: null
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
        case 'GET_DATA':
            return {
                ...state,
                ...action.payload
            }
        case 'SET_UPLOAD_MODAL_OPEN':
            return {
                ...state,
                uploadModalOpen: action.payload
            }
        case 'SET_PLAN_TO_UPLOAD_IMAGES_TO':
            return {
                ...state,
                planToUploadImagesTo: action.payload
            }
        default:
            return state;
    }
}

export default reducer;
