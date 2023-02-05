import {
  Section,
  Profile,
  Statistics,
  FriendList,
  TransactionHistory,
} from 'components';

import user from 'data/user';
import data from 'data/data';
import friends from 'data/friends';
import transactions from 'data/transactions';

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
