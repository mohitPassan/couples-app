import firebase from '../firebase.config';

export const changeScreen = (screen) => ({
    type: 'CHANGE_SCREEN',
    payload: screen
});

export const changePlanStatus = (plan, status) => ({
    type: 'CHANGE_PLAN_STATUS',
    payload: { plan, status }
});

export const addPlan = (title) => ({
    type: 'ADD_PLAN',
    payload: title
});

export const getData = () => {
    return (dispatch) => {
        firebase.database().ref('/').once('value')
        .then((snapshot) => {
            allData = snapshot.val();
            dispatch({
                type: 'GET_DATA',
                payload: snapshot.val()
            })
        });
    }
}