class museum{
    constructor(){
        this.pieces = [];
    }
    getPieces(){
        return this.pieces;
    }
    setPieces(pieces){
        this.pieces = pieces;
    }
    initializeGallery(){
        let piece1 = new piece("./img/Museo.jpg", "El Museo de la Acrópolis es un museo arqueológico griego situado en la ciudad de Atenas, en un edificio ubicado a unos 300 m. al sur de la acrópolis. Es uno de los principales museos arqueológicos de Atenas y es también considerado como uno de los más importantes del mundo.2​ El antiguo museo se encontraba en el interior de la acrópolis pero debido a sus pequeñas dimensiones se propuso la construcción de un nuevo museo de mayor tamaño fuera de la acrópolis. Este nuevo museo fue reinaugurado el 20 de junio de 2009.");
        let piece2 = new piece("./img/Olivo.jpg", "La disputa entre Poseidón y Atenea por el dominio del Ática, en la cual Atenea hizo brotar un olivo que le dio la victoria, fue representada en el frontón oeste del Partenón que, como el resto del edificio, quedó muy dañado en 1687, cuando la flota veneciana atacó Atenas y un cañonazo voló una parte del mismo.");
        let piece3 = new piece("./img/moscoforo.jpg", "El Moscóforo de c. 570 a. C., que representa a un hombre que lleva a hombros un ternero. Es la obra de mármol más antigua procedente del Himeto.");
        let piece4 = new piece("./img/coleccionkores.jpg", "La colección de kores, estatuas femeninas arcaicas, entre las que destacan la Kore del Peplo, la Kore de Antenor, la Kore de Eutídico y la Kore n.º 674.");
        let piece5 = new piece("./img/jinete-rampin.jpg", "El Jinete Rampin, también llamado Caballero Rampin, es una escultura tipo kuros que data de mediados del siglo VI a. C. y que fue esculpida por un artista de los talleres de Ática. Se trata de la escultura de un hombre a caballo más antigua del arte y una de las obras maestras pertenecientes al Período arcaico de Grecia.");
        this.pieces.push(piece1);
        this.pieces.push(piece2);
        this.pieces.push(piece3);
        this.pieces.push(piece4);
        this.pieces.push(piece5);
    }
}