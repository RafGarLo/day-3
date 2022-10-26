export const setCardInfo = (HTMLElement, data, image) => {
    HTMLElement.outerHTML = `<div class="card character__card">
                        <img
                            src="${image}"
                            alt="Nombre y familia del personaje"
                            alt="${data.name} de la familia ${data.family}"
                            class="character__picture card-img-top"
                        />
                        <div class="card-body">
                            <h2 class="character__name card-title h4">
                                ${data.name} de la familia ${data.family}
                            </h2>
                            <div class="character__info">
                                <ul class="list-unstyled">
                                    <li>Edad: ${data.age}</li>
                                    <li>
                                        Estado:
                                        <i class="fas fa-thumbs-down"></i>
                                        <i class="fas fa-thumbs-up"></i>
                                    </li>
                                </ul>
                            </div>
                            <div class="character__overlay">
                                <ul class="list-unstyled">
                                    <li>${
                                        data.kingdomYears
                                            ? 'Años de reinado: ' +
                                              data.kingdomYears
                                            : ''
                                    } </li>
                                    <li>${
                                        data.weapon
                                            ? 'Arma: ' + data.weapon
                                            : ''
                                    }</li>
                                    <li>
                                    ${
                                        data.dexterity
                                            ? 'Destreza: ' + data.dexterity
                                            : ''
                                    }
                                    </li>
                                    <li>
                                    ${
                                        data.pelotism
                                            ? 'Pelotismo: ' + data.pelotism
                                            : ''
                                    }
                                    </li>
                                    <li></li>
                                    <li>
                                     ${
                                         data.servingTo
                                             ? 'Sirviendo a: ' + data.servingTo
                                             : ''
                                     }
                                    </li>
                                </ul>
                                <div class="character__actions">
                                    <button class="character__action btn">
                                        habla
                                    </button>
                                    <button class="character__action btn">
                                        muere
                                    </button>
                                </div>
                            </div>
                        </div>
                        <i class="emoji"></i>
                    </div>`;
};
