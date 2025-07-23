import permittedCharacters from "./utils/permitted-characters.js";

async function handle() {
    const characters = await permittedCharacters();
    const passwordLength = +process.env.PASSWORD_LENGTH;
    const password = Array(passwordLength)
        .fill(null)
        .map(() => characters[Math.floor(Math.random() * characters.length)])
        .join('');

    return password;
}

export default handle;