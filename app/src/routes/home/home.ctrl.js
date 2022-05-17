"use strict";

const users = {
    id: ["test1", "test2", "test3"],
    pw: ["1234", "12345", "123456"],
}

const output = {
    home: (req, res) => {
        res.render("home/index");
    },
    
    login: (req, res) => {
        res.render("home/login");
    },
}

const process = {
    login: (req, res) => {
        const id = req.body.id,
            pw = req.body.pw
        
        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.pw[idx] === pw) {
                return res.json({
                    success: true,
                });
            }
        }

        return res.json({
            success: false,
            msg: "로그인에 실패!!"
        });
    },
}


module.exports = {
    output,
    process,
};