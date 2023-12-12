export class User {
    id!: number;
    nom!: string;
    prenom!: string;
    username!: string;
    email!: string;
    telephone!: string;
    etat!: boolean;
    cni!:number;
    sexe!:string;
    createdAt!:Date;
    createdBy!:string;
    updatedAt!:Date;
    updatedBy!:string;
    projets!:[];
    commentaires!:[];
}