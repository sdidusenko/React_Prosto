

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [/*
        {
            id: 1,
            followed: true,
            fullName: 'Mikhalich',
            status: 'Slava Ukraini!!!',
            img: Mihalich,
            location: {
                city: "Vokzal'na town",
                country: 'Ukraine'
            },
        },
        {
            id: 2,
            followed: false,
            fullName: 'Slavik',
            status: 'Heroyam Slava!!!',
            img: Slavik,
            location: {
                city: 'Marcynivka comunity',
                country: 'Ukraine'
            },
        },
        {
            id: 3,
            followed: true,
            fullName: 'Mariya',
            status: "Dobriy den' everybody!",
            img: Mariya,
            location: {
                city: 'Myrtiuki is the best',
                country: 'Ukraine'
            },
        },
        {
            id: 4,
            followed: true,
            fullName: 'Aliona',
            status: "Russkiy voenniy korabl'-idi na...",
            img: Aliona,
            location: {
                city: 'Ovruch region',
                country: 'Ukraine'
            },
        },*/]
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(e => {
                        if (e.id === action.userId) {
                            return {...e, followed: false}
                        }
                        return e
                    }
                )
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(e => {
                        if (e.id === action.userId) {
                            return {...e, followed: true}
                        }
                        return e
                    }
                )
            }
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state
    }
}
export const followActionCreator = (userId) => ({type: FOLLOW, userId})
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId})
export const setUsersActionCreator = (users) => ({type: SET_USERS, users})


export default userReducer;



