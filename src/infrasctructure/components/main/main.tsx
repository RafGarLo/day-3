import { Card } from '../cards/card';

export function Main() {
    return (
        <div className="app container">
            <ul className="characters-list row list-unstyled">
                <Card></Card>
            </ul>
        </div>
    );
}