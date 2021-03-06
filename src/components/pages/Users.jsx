import styled from 'styled-components';
import { UserContext } from '../../providers/UserProvider';
import { SecondaryButton } from '../atoms/button/SecondaryButton';
import { SearchInput } from '../molecules/SearchInput';
import { UserCard } from '../organisms/user/UserCard';
import React, { useContext } from 'react';

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `けんた${val}`,
    image:
      'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    email: '1234ecalm.com',
    phone: '087-078-3699',
    company: {
      name: 'テスト株式会社'
    },
    website: 'https://google.com'
  };
});

export const Users = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const onCickSwich = () => {
    setUserInfo({ isAdmin: !userInfo.isAdmin });
  };
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />
      <br />
      <SecondaryButton onClick={onCickSwich}>
        切り替え
      </SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(200px, 1fr)
  );
  grid-gap: 20px;
`;
