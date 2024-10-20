import { useState } from 'react';
import userData from '../data/userData.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';
import Navigation from './Navigation/Navigation';
import Profile from './Profile/Profile';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import styles from './App.module.css';

function App() {
  const [currentTask, setCurrentTask] = useState('profile');

  return (
    <>
      <div className={styles.container}>
        <Navigation currentTask={currentTask} setCurrentTask={setCurrentTask} />
      </div>

      {currentTask === 'profile' && (
        <div className={styles.container}>
          <Profile
            name={userData.username}
            tag={userData.tag}
            location={userData.location}
            image={userData.avatar}
            stats={userData.stats}
          />
        </div>
      )}

      {currentTask === 'friends' && (
        <div className={styles.container}>
          <FriendList friends={friends} />
        </div>
      )}

      {currentTask === 'transactions' && (
        <div className={styles.container}>
          <TransactionHistory items={transactions} />
        </div>
      )}
    </>
  );
}

export default App;
