// {
//     plan1: {
//         title: "Plan #1",
//         photos: [
//             'link1',
//             'link2',
//             'link3'
//         ]
//     }
// }

const INITIAL_STATE = {
    screen: 'home',
    plans: {
        plan1: {
            title: "Plan #1",
            data: [],
            status: 'not-done'
        },
        plan2: {
            title: "Plan #2",
            data: [],
            status: 'done'
        },
        plan3: {
            title: "Plan #3",
            data: [
                "https://www.socialinnovationacademy.eu/wp-content/uploads/2018/06/cities.png",
                "https://static.toiimg.com/thumb/msid-38487526,width-748,height-499,resizemode=4,imgsize-248462/.jpg",
                "https://i.insider.com/5b9137e10ce5f5b27e8b4a0c?width=600&format=jpeg&auto=webp"
            ],
            status: 'done-with-photos'
        }
    }
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'CHANGE_SCREEN':
            return {
                ...state,
                screen: action.payload
            }
        
        case 'CHANGE_PLAN_STATUS':
            return {
                ...state,
                plans: {
                    ...state.plans,
                    [action.payload.plan]: {
                        ...state.plans[action.payload.plan],
                        status: action.payload.status
                    }
                }
            }
        default: 
            return state;
    }
}

export default reducer;
