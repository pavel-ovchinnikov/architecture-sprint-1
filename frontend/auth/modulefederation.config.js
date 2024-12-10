module.exports = {
    name: "auth-microfrontend",
    filename: "Login.js",
    exposes: {
        './auth': './components',
    },
    shared: ["react", "react-dom"]
}; 
