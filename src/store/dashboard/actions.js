export const DASHBOARD_TEST = 'DASHBOARD_TEST';

export const dashboardGetHistory = (someData) => (
    {
        type: DASHBOARD_TEST,
        payload: someData
    }
)