import { Formik } from 'formik';
import * as Yup from 'yup';

import Button from '@/ui/Button';

import styles from './SignIn.module.css';

function page() {

  return (
     <section className={styles.login}>
      <Formik
        initialValues={{
          username: '',
          password: '',
        }}
        validationSchema={Yup.object().shape({
          username: Yup.string().required('Required'),
          password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Required'),
        })}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col full-width"
          >
            <input
              className="full-width flex flex-col"
              label="Username"
              name="username"
              type="text"
              placeholder="Username"
            />
            <input
              className="full-width flex flex-col"
              label="Password"
              name="password"
              type="password"
              placeholder="Password"
            />

            <Button className="full-width" type="submit">
              Sign In
            </Button>
          </form>
        )}
      </Formik>
    </section>
  );
}

export default page;
