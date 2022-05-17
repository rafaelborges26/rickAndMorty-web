export interface ModalPokemonProps extends ModalPokemonStylesProps {
    name: string;
    closeModal: () => void
}

export interface ModalPokemonStylesProps {
    backgroundModal?: string
}

export interface StatsProps {        
    base_stat: number,
    effort: number,
    stat: {
        name: string,
        url: string
    }
}