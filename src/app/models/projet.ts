export class Projet {
    id!: number;
    titre!: string;
    description!: string;
    image!: File;
    etat!: boolean;
    delai!: Date ;
    cout!: number ;
    idUser!:number;
    idTypeProjet!:number;
    idEtatProjet!:number;
    createdAt!:string;
    createdBy!:string;
    updatedAt!:string;
    updatedBy!:string;
}
