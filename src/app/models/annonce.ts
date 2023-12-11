export class Annonce {
    _id!: number;
    titre!: string;
    description!: string;
    image! : string
    etat!: boolean;
    idUser!:number;
    createdAt!:Date;
    createdBy!:string;
    updatedAt!:Date;
    updatedBy!:string;
}