// import { BrowserRouter } from 'react-router-dom';
// import { PrimaryButton } from './components/atoms/button/PrimaryButton';
// import { SecondaryButton } from './components/atoms/button/SecondaryButton';
// import { SearchInput } from './components/molecules/SearchInput';
// import { UserCard } from './components/organisms/user/UserCard';
// import { DefaultLayout } from './components/templates/DefaultLayout';
// import { HeaderOnly } from './components/templates/HeaderOnly';
import { Router } from './router/Router';
import './styles.css';

export default function App() {
  return <Router />;
}

{
  /* <BrowserRouter>
<DefaultLayout>
  <PrimaryButton>テスト</PrimaryButton>
  <SecondaryButton>検索</SecondaryButton>
  <br />
  <SearchInput />
  <UserCard user={user} />
</DefaultLayout>
</BrowserRouter> */
}
