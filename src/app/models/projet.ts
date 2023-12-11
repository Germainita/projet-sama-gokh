export class Projet {
    id!: number;
    titre!: string;
    description!: string;
    image!: File;
    delai!: number;
    etat!: boolean;
    idUser!:number;
    idTypeProjet!:number;
    idEtatProjet!:number;
    createdAt!:string;
    createdBy!:string;
    updatedAt!:string;
    updatedBy!:string;
}