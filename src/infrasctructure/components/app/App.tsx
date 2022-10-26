import { AppRoutes } from '../routes/routes';
import { Layout } from '../layout/layout';

export function App() {
    return (
        <Layout>
            <AppRoutes></AppRoutes>
        </Layout>
    );
}
