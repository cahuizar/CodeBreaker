export class Keyword {

    Keyword(text, keyword): string {
        let pathText = text.split('');
        let solution = [];
        let abc = "abcdefghijklmnopqrstuvwxyz".split('');
        let abc2 = "abcdefghijklmnopqrstuvwxyz".split('');
        solution = [];
        for(let x = 0; x < keyword.length; x++){
            let index = abc.indexOf(keyword[x]);
            if (index > -1) {
            abc.splice(index, 1);
            }
        }
        let joinedAbc = abc.join('');
        let newAbc = (keyword+joinedAbc).split('');

        for(let x = 0; x < pathText.length; x++){
            let index = abc2.indexOf(pathText[x]);
            solution[x] = newAbc[index];
        }
        return solution.join('');
    }
    
}
