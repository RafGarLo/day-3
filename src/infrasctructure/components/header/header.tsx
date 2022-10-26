import { Menu } from '../menu/menu';
import styles from './header.module.css';
// eslint-disable-next-line @typescript-eslint/no-redeclare

export function Header() {
    const title = 'Learning React';
    return (
        <header className={styles.header}>
            <h1>{title}</h1>
            <Menu></Menu>
        </header>
    );
}