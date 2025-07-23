import prompt from "prompt";

import mainPrompt from "./prompts-schema/schema-main.js";

import createQrCode from "./services/qr-code/create.js";

import createPassword from "./services/password/create.js";

async function main() {
    prompt.get(mainPrompt,async(err, choose) => {
        if(err) return console.error("Error occurred:", err);
        if(choose.select == 1) await createQrCode();
        if(choose.select == 2) await createPassword();
    });
    prompt.start();
}

main();