export class Generate {

    public static key() {
        const characters = '0123456789';
        const length = 8;
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters[randomIndex];
        }
        return result;
    }
    
}