import styles from './UserLogOut.module.css';
import { logOut } from '../../utilities/users-service';

export default function UserLogOut({ user, setUser }) {
function handleLogOut() {
  logOut();
  setUser(null);
}

return (
  <div className={styles.UserLogOut}>
    <div className={styles.email}>Welcome: {user.name}</div>
    <div className={styles.email}>{user.email}</div>
    <button className="button-logout-logout" onClick={handleLogOut}>LOG OUT</button>
  </div>
);
}