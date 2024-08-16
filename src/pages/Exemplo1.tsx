import styles from './Exemplo1.module.css';

export function Exemplo1() {


  return (
    <div className={styles.chatNotification}>
      <div className={styles.chatNotificationLogoWrapper}>
        <img className={styles.chatNotificationLogo} src="/img/chat.png" alt="ChitChat Logo" />
      </div>
      <div className={styles.chatNotificationContent}>
        <h4 className={styles.chatNotificationTitle}>ChitChat</h4>
        <p className={styles.chatNotificationMessage}>You have a new message!</p>
      </div>
    </div>

  );
}

