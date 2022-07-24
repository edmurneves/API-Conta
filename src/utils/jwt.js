require('dotenv').config();
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env || 'suaSenhaSecreta';

const jwtConfig = {
    expiresIn: '1d',
    algorithm: 'HS256',
};

const generateJWTToken = ({ codCliente, nome, email }) => 
    jwt.sign({ codCliente, nome, email }, JWT_SECRET, jwtConfig);

const authenticateToken = async (token) => {
    if (!token) {
        const error = { status: 401, message: 'Token não encontrado' };
        throw error;
    }

    try {
        const validate = await jwt.verify(token, JWT_SECRET);        
        return validate;
    } catch (error) {
        const errorMessage = { status: 401, message: 'Token expirado ou inválido' };
        throw errorMessage;
    }
};

module.exports = {
    generateJWTToken,
    authenticateToken,
};
