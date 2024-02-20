
/**
 * Fonction filtrant les données des données mockés, utilisant la méthode filter,
 * et retournant l'objet contenant uniquement la donnée avec l'id
 * @param {*} id 
 */
export function getMockedDataFromID(userId, array){
    let a = array.filter((e)=> {
        if(e.userId == undefined){ return e.id == userId}
        if(e.id == undefined ){ return e.userId == userId }
    });
    return a[0]
}