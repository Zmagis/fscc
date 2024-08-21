import * as Yup from 'yup';

export const authUserSchema = () =>
  Yup.object().shape({
    email: Yup.string()
      .trim()
      .email('Neteisingas el.pašto adresas')
      .required('Reikalingas el.pašto adresas'),
    password: Yup.string()
      .required('Reikalingas slaptažodis')
      .min(8, 'Slaptažodis turi būti iš bent 8 simboliai'),
  });
