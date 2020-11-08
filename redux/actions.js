export const changeScreen = (screen) => ({
    type: 'CHANGE_SCREEN',
    payload: screen
});

export const changePlanStatus = (plan, status) => ({
    type: 'CHANGE_PLAN_STATUS',
    payload: { plan, status }
})