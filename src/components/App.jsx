import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendsList/FriendList';
import { TransactionHistory } from './Transactions/TransactionHistory';
import user from '../../src/user.json';
import data from "../../src/data.json";
import friends from '../../src/friends.json';
import transactions from '../../src/transactions.json'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      < Profile
   username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions}/>
    </div>
  );
};
