export const REGISTER_DEV = 'REGISTER_DEV';

export const registerDev = (value, name) => ({
  type: REGISTER_DEV,
  value,
  name,
});
