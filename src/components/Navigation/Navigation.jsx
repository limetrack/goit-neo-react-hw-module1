import styles from './Navigation.module.css';

const Navigation = ({ currentTask, setCurrentTask }) => {
  const navItems = [
    { label: 'Profile', value: 'profile' },
    { label: 'Friends', value: 'friends' },
    { label: 'Transactions', value: 'transactions' },
  ];

  return (
    <ul className={styles.navigation}>
      {navItems.map(item => (
        <li key={item.value}>
          <button
            className={`${styles.navigationButton} ${
              currentTask === item.value ? styles.active : ''
            }`}
            onClick={() => setCurrentTask(item.value)}
          >
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
