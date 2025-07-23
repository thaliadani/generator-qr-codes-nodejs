import prompt from "prompt";
import qrCodePrompt from "../../prompts/prompt-qrcode.js";
import handle from "./handle.js";

async function createQrCode() {
    prompt.get(qrCodePrompt, handle);

    prompt.start();
}

export default createQrCode;