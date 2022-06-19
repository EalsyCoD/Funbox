export interface RootState {
    cats: CatsState
}

export type CatsState = {
    items: Cats[]
}

export type Cats = {
    id: number,
    title: string,
    titleSelectedHover: string,
    name: string,
    stuffing: string,
    portionCount: number,
    gift: string[],
    weight: string,
    status: string,
    selectedText: string
}


export type Catss = {
    id: number,
    title: string,
    titleSelectedHover: string,
    name: string,
    stuffing: string,
    portionCount: number,
    gift: string[],
    weight: string,
    status: string,
    selectedText: string
}