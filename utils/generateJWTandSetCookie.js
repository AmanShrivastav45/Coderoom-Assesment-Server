import { generateTokens } from './generateTokens.js';

export const generateJWTandSetCookie = (response, userId) => {
  const { accessToken, refreshToken } = generateTokens(userId);
  response.cookie('accessToken', accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', 
    sameSite: 'Strict',
    maxAge: 15 * 60 * 1000, 
  });

  response.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', 
    sameSite: 'Strict',
    maxAge: 7 * 24 * 60 * 60 * 1000, 
  });
};