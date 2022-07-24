const { generateJWTToken } = require('../utils/jwt');

const loginModel = require('../models/loginModel')

const authenticate = async ({ email, password }) => {
    if (!email || !password) {
        const error = { status: 400, message: 'Os campos "email e senha" são obrigatórios' };
        throw error;
    }

    const [user] = await loginModel.getById(email, password);    

    if (!user) {
        const error = { status: 400, message: 'email ou senha inválidos' };
        throw error;
    }

    const token = generateJWTToken(user);

    return { token };
};

module.exports = { authenticate };