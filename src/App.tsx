import { Route, Routes } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';

export interface AppProps {

}

export function App({}: AppProps) {
  return(
    <Routes>
      <Route path="login" element={<LoginPage />} />
      <Route path="courses">
        <Route index />
        <Route path=":courseId" />
      </Route>
    </Routes>
  )
}