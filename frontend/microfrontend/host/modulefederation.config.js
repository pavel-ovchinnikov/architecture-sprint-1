module.exports = {
    name: "host",
    remotes: {
        "auth": "auth@https://auth.nomoreparties.co/auth/Login.js",
        "photo": "photo@https://nomoreparties.co/photo/Main.js",
        "profile": "profile@https://nomoreparties.co/profile/Main.js"
    },
    shared: ["react", "react-dom"]
};   
