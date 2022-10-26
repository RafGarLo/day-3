import { Header } from '../header/header';
import { Footer } from '../footer/footer';

export function Layout({ children }: { children: JSX.Element }) {
    return (
        <>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    );
}
