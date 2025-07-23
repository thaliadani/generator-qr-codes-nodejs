import prompt from "prompt";
import qrCodePrompt from "../../prompts-schema/schema-qrcode.js";
import handle from "./handle.js";

async function createQrCode() {
    prompt.start();
    prompt.get(qrCodePrompt, handle);
}

export default createQrCode;