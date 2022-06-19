import React from 'react'

import styles from './Cat.module.scss'
import { Item } from './item'

const item = {
    items: [
        {
            id: 1,
            title: "Сказочное заморское яство",
            titleSelectedHover: "Котэ не одобряет?",
            name: "Нямушка",
            stuffing: "с фуа-гра",
            portionCount: 10,
            gift: ["мышь в подарок"],
            weight: "0,5",
            noselected: true,
            status: true,
            selectedText: "Печень утки разварная с артишоками."
        },
        {
            id: 2,
            title: "Сказочное заморское яство",
            titleSelectedHover: "Котэ не одобряет?",
            name: "Нямушка",
            stuffing: "с рыбой",
            portionCount: 40,
            gift: ["2 мыши в подарок"],
            weight: "2",
            noselected: false,
            status: true,
            selectedText: "Головы щучьи с чесноком да свежайшая сёмгушка."
        },
        {
            id: 3,
            title: "Сказочное заморское яство",
            titleSelectedHover: "Котэ не одобряет?",
            name: "Нямушка",
            stuffing: "с курой",
            portionCount: 100,
            gift: ["5 мышей в подарок", "заказчик доволен"],
            weight: "5",
            noselected: false,
            status: false,
            selectedText: "Филе из цыплят с трюфелями в бульоне."
        }
    ]
}

const Cat = () => {
    return (
        <div className={styles.itemcontainer}>
            {item.items.map((cat) => (
                <Item key={cat.id} data={cat} />
            ))}
        </div>
    )
}


export default Cat;