import qr from "qrcode-terminal";
import chalk from "chalk";

async function handle(err, result) {
    if (err) return console.error("Error occurred:", err);

    qr.generate(result.link, { small: result.type === "2" }, (qrcode) => {
        console.log(chalk.green("QR Code generated successfully!\n"), qrcode);
    });
}

export default handle