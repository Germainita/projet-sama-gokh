import { Vote } from "./vote";

export class Projet {
    id!: number;
    titre!: string;
    description!: string;
    image! : string
    etat!: boolean;
    delai!: Date ;
    cout!: number ;
    idUser!:number;
    idTypeProjet!:number;
    idEtatProjet!:number;
    createdAt!:Date;
    createdBy!:string;
    updatedAt!:Date;
    updatedBy!:string;
    voted!: any;
}
