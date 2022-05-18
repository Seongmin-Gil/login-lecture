"use strict";

class UserStorage {
    static #users = {
        id: ["test1", "test2", "test3"],
        pw: ["1234", "12345", "123456"],
        name: ["홍길동", "임꺽정", "정약용"],
    };

    static getUsers(...fields) {
        const users = this.#users
        const newUsers = fields.reduce((newUsers, field) =>{
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users
        const idx = users.id.indexOf(id);
        const userInfo = Object.keys(users).reduce((newUser, info) =>{
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
}

module.exports = UserStorage