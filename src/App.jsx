// import { Section } from 'components/Section/Section';
// import { Profile } from 'components/Profile/Profile';
// import { Statistics } from 'components/Statistics/Statistics';
// import { FriendList } from 'components/FriendList/FriendList';
// import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import {
  Section,
  Profile,
  Statistics,
  FriendList,
  TransactionHistory,
} from 'components';

import user from 'info/user';
import data from 'info/data';
import friends from 'info/friends';
import transactions from 'info/transactions';

export const App = () => {
  return (
    <>
      <Section title="Profile">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatarUrl={user.avatar}
          stats={user.stats}
        />
      </Section>
      <Section title="Statistics">
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </Section>
      <Section title="Friends List">
        <FriendList friends={friends} />
      </Section>
      <Section title="Transactions">
        <TransactionHistory items={transactions} />
      </Section>
    </>
  );
};
