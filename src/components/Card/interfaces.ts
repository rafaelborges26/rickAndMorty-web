export interface ICardStatus {
    status: 'Alive' | 'Dead' | 'Unknown'
}

export interface ICard extends ICardStyles {
    name: string
    image: string
    status: 'Alive' | 'Dead' | 'Unknown'
    episodes: string[]
}

export interface ICardStyles {
    variations?: 'primary' | 'secondary'
}