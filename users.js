class Users {
    constructor() {
        this.users = {};
    }

    add = (user) => {
        if (this.users[user.id])
            throw new Error('This ID not unique!')
        else {
            this.users[user.id] = user;
            return true;
        }
    }
}