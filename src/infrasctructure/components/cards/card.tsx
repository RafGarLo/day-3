import { characters } from '../../models/characters/characters';

export function Card() {
    return (
        <>
            {' '}
            {characters.map((item) => (
                <li className="character col">
                    <div className="card character__card">
                        <img
                            src={
                                './assets/img/' +
                                item.name.toLowerCase() +
                                '.jpg'
                            }
                            alt="Nombre y familia del personaje"
                            className="character__picture card-img-top"
                        />
                        <div className="card-body">
                            <h2 className="character__name card-title h4">
                                {item.name} {item.family}
                            </h2>
                            <div className="character__info">
                                <ul className="list-unstyled">
                                    <li>{item.name}</li>
                                    <li>
                                        Estado:
                                        <i className="fas fa-thumbs-down"></i>
                                        <i className="fas fa-thumbs-up"></i>
                                    </li>
                                </ul>
                            </div>
                            <div className="character__overlay">
                                <ul className="list-unstyled">
                                    <li>{item.age}</li>
                                    <li>{item.family}</li>
                                    <li>{item.lifeStatus}</li>
                                    <li>{item.message}</li>
                                </ul>
                                <div className="character__actions">
                                    <button className="character__action btn">
                                        habla
                                    </button>
                                    <button className="character__action btn">
                                        muere
                                    </button>
                                </div>
                            </div>
                        </div>
                        <i className="emoji"></i>
                    </div>
                </li>
            ))}
        </>
    );
}