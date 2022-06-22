// ACTION TYPE CONTACT_DEV
export const CONTACT_DEV = 'CONTACT_DEV';
// ACTION CREATOR contactDev
export const contactDev = (value, name) => ({
  type: CONTACT_DEV,
  value,
  name,
});
// ACTION TYPE CONTACT_DEV_RAZ
export const CONTACT_DEV_RAZ = 'CONTACT_DEV_RAZ';
// ACTION CREATOR contactDevRaz
export const contactDevRaz = () => ({
  type: CONTACT_DEV_RAZ,
});
