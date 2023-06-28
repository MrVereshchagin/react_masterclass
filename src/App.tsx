import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { Layout } from './components/Layout';

export interface AppProps {

}

export function App({}: AppProps) {
  return(
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="courses" element={<Layout />}>
        <Route index />
        <Route path=":courseId" />
      </Route>
    </Routes>
  )
}