import styles from './footer.module.css';

export function Footer() {
    const date = new Date();
    return (
        <footer className={styles.footer}>
            <address>ISDI Coders Rafael Garcia</address>
            <p>{date.toLocaleString()}</p>
        </footer>
    );
}
export default Footer;