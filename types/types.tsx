export interface UserData {
    [key: string]: any,
    id: number | null,
    name: string,
    email: string,
    age: number | null,
    country: string,
}

export interface UsersData {
    users: UserData[],
}
