import React from 'react'
import { Cats, Catss } from 'src/types';
import cat from '../../assets/cat.png'
import styles from './Cat.module.scss'
export interface Props {
    data: Catss
}

const Item: React.FC<Props> = ({ data }) => {
    const [selected, setSelected] = React.useState(data.status)
    const [datas, setData] = React.useState(data)

    const handleSelected = () => {
        if (selected === 'Selected') {
            setSelected('notSelected')
            setData(data)
        } else if (selected === 'notSelected') {
            setSelected('Selected')
            setData(data)
        }
    }

    const MouseEnter = (mode1: any, text: string) => {
        const mode = mode1
        if (selected === "selected" && mode === "MouseEnter") {
            data.title = text
        }
        if (mode === "MouseLeave") {
            data.title = data.title
        }
    }

    return (
        <React.Fragment>
            {selected === "notSelected" && (
                <div onMouseLeave={() => MouseEnter("MouseLeave", data.title)} onMouseEnter={() => MouseEnter("MouseEnter", data.titleSelectedHover)} onClick={handleSelected} className={styles.container}>
                    <div>
                        <p className={styles.title}>{datas.title}</p>
                        <p className={styles.name}>{datas.name}</p>
                        <p className={styles.with}>{datas.stuffing}</p>
                        <p className={styles.title}>{datas.portionCount} порций<br />{datas.gift[0]},<br />{datas.gift[1]}</p>
                        <img src={cat} className={styles.img}></img>
                        <div className={styles.weight}>
                            <div className={styles.weightcolor}>{datas.weight}</div>
                            <div className={styles.weightkg}>кг</div>
                        </div>
                    </div>
                    {datas.status ? (
                        <div className={styles.label}>
                            Чего сидишь? Порадуй котэ,
                            <a className={styles.buy} href='#'>купи</a>
                        </div>
                    ) : (
                        <React.Fragment>
                            <div className={styles.labelfalse}>
                                Печаль {datas.stuffing} закончился
                            </div>
                        </React.Fragment>
                    )}
                </div>
            ) || (
                    <React.Fragment>
                        {datas.status === "disabled" && (
                            <div className={styles.containerfalse}>
                                <div className={styles.wrapper}>
                                    <p className={styles.title}>{datas.title}</p>
                                    <p className={styles.name}>{datas.name}</p>
                                    <p className={styles.with}>{datas.stuffing}</p>
                                    <p className={styles.title}>{datas.portionCount} порций<br />{datas.gift[0]},<br />{datas.gift[1]}</p>
                                    <img src={cat} className={styles.img}></img>
                                    <div className={styles.weightfalse}>
                                        <div className={styles.weightcolor}>{datas.weight}</div>
                                        <div className={styles.weightkg}>кг</div>
                                    </div>
                                </div>
                                <React.Fragment>
                                    <div className={styles.labelfalse}>
                                        Печаль {datas.stuffing} закончился
                                    </div>
                                </React.Fragment>
                            </div>
                        ) || (
                                <React.Fragment>
                                    <div onClick={handleSelected} className={styles.container2}>
                                        <div>
                                            <p className={styles.title}>{datas.title}</p>
                                            <p className={styles.name}>{datas.name}</p>
                                            <p className={styles.with}>{datas.stuffing}</p>
                                            <p className={styles.title}>{datas.portionCount} порций<br />{datas.gift[0]},<br />{datas.gift[1]}</p>
                                            <img src={cat} className={styles.imgSelected}></img>
                                            <div className={styles.weight}>
                                                <div className={styles.weightcolor}>{datas.weight}</div>
                                                <div className={styles.weightkg}>кг</div>
                                            </div>
                                        </div>
                                        {datas.status ? (
                                            <div className={styles.labelSelected}>
                                                {datas.selectedText}
                                            </div>
                                        ) : (
                                            <React.Fragment>
                                                <div className={styles.labelfalse}>
                                                    Печаль {datas.stuffing} закончился
                                                </div>
                                            </React.Fragment>
                                        )}
                                    </div>
                                </React.Fragment>
                            )}
                    </React.Fragment>
                )}
        </React.Fragment>
    )
}

export { Item };
