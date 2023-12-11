export class Projet {
    _id!: number;
    titre!: string;
    description!: string;
    image!: File;
    delai!: number;
    etat!: boolean;
    idUser!:number;
    idTypeProjet!:number;
    idEtatProjet!:number;
}