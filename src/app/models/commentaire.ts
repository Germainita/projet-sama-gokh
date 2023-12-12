export class Commentaire {
    id!: number;
    contenu!: string;
    idUser!:number;
    idAnnonce!:number;
    createdAt!:Date;
    createdBy!:string;
    updatedAt!:Date;
    updatedBy!:string;
}