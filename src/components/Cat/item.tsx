import React from 'react'
import { Catss } from 'src/types';
import cat from '../../assets/cat.png'
import styles from './Cat.module.scss'
export interface Props {
    data: Catss
}

const Item: React.FC<Props> = ({ data }) => {
    const [visible, setVisible] = React.useState(false)
    const [state, setState] = React.useState()
    // const rootClasses = [styles.container];
    // if (visible) {
    //     rootClasses.push(styles.active)
    // }
    return (
        <React.Fragment>
            {data.status ? (
                <div className={styles.container}>
                    <div>
                        <p className={styles.title}>{data.title}</p>
                        <p className={styles.name}>{data.name}</p>
                        <p className={styles.with}>{data.stuffing}</p>
                        <p className={styles.title}>{data.portionCount} порций<br />{data.gift[0]},<br />{data.gift[1]}</p>
                        <img src={cat} className={styles.img}></img>
                        <div className={styles.weight}>
                            <div className={styles.weightcolor}>{data.weight}</div>
                            <div className={styles.weightkg}>кг</div>
                        </div>
                    </div>
                    {data.status ? (
                        <div className={styles.label}>
                            Чего сидишь? Порадуй котэ,
                            <a className={styles.buy} href='#'>купи</a>
                        </div>
                    ) : (
                        <React.Fragment>
                            <div className={styles.labelfalse}>
                                Печаль {data.stuffing} закончился
                            </div>
                        </React.Fragment>
                    )}
                </div>
            ) : (
                <React.Fragment>
                    <div className={styles.containerfalse}>
                        <div className={styles.wrapper}>
                            <p className={styles.title}>{data.title}</p>
                            <p className={styles.name}>{data.name}</p>
                            <p className={styles.with}>{data.stuffing}</p>
                            <p className={styles.title}>{data.portionCount} порций<br />{data.gift[0]},<br />{data.gift[1]}</p>
                            <img src={cat} className={styles.img}></img>
                            <div className={styles.weightfalse}>
                                <div className={styles.weightcolor}>{data.weight}</div>
                                <div className={styles.weightkg}>кг</div>
                            </div>
                        </div>
                        <React.Fragment>
                            <div className={styles.labelfalse}>
                                Печаль {data.stuffing} закончился
                            </div>
                        </React.Fragment>
                    </div>
                </React.Fragment>
            )}
        </React.Fragment>
    )
}



export { Item };
