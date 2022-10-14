import {users} from "../assets/js/data-users";

export const getUsers = () => {
    return users.map((user) => {
            return {
                params: {
                    id: user.id
                }
            }
        }
    )
}

export const getUserData = async (id) => {
    const foundUser = await users.find((user) => user.id === params.id);

    return {
        id,
        name: foundUser.name
    }
}
