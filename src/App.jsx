import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from './redux/auth/operations';
import Layout from './components/Layout/Layout';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import { selectIsRefreshing } from './redux/auth/selectors';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

   if (isRefreshing) {
    return <div>Loading...</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/contacts" component={RegistrationPage} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={LoginPage} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={ContactsPage} />
            }
          />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;



