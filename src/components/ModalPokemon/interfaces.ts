export interface ModalPokemonProps {
    name: string;
    closeModal: () => void
}

export interface StatsProps {        
    base_stat: number,
    effort: number,
    stat: {
        name: string,
        url: string
    }
}