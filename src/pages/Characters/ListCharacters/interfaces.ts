export interface IListCharacters extends IListCharactersStyles {
 setActiveList: (active: boolean) => void;  
}

export interface IListCharactersStyles {
    activeList: boolean 
}