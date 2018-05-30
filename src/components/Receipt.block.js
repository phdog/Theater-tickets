import React from 'react';

const TICKET_PRICE = 100;


const Receipt = ({selected, isMessageVisible}) => {

        return (
            <div className="Receipt">
                {isMessageVisible &&
                        <div className="Receipt--seats">
                                <p className="Receipt--headline">Спасибо за заказ!</p>
                        </div>
                }

                {!!selected.length && <React.Fragment>
                    <div className="Receipt--seats">
                        <p className="Receipt--headline">Вы выбрали места:</p>
                        <ul className="Receipt--list">
                            {selected.map((place) => {
                                const [row, seat] = place.split(':')
                                return (
                                    <li key={place}>
                                        {`ряд ${Number(row) + 1} место ${Number(seat) + 1}`}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="Receipt--price">
                        <p className="Receipt--headline">Общая стоимость:</p>
                        <p>{`${selected.length * TICKET_PRICE} ₽`}</p>
                    </div>
                </React.Fragment>
                }
            </div>
        );

}

export default Receipt;
