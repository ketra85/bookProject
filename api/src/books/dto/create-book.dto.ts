export class CreateBookDto {
    bookId: number;

    title: string;
    
    description: string;
        
    publisherId: number;

    publishedYear: Date;
    
    typeId: number;
    
    pages: number;
    
    price: number;
    
    cdnLink: string;

    createdAt: Date;
}