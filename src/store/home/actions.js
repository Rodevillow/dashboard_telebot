export const HOME_TEST = 'HOME_TEST';

export const homeGetPosts = (someData) => (
    {
        type: HOME_TEST,
        payload: someData
    }
)