import chalk from "chalk";

const qrCodePrompt = [
    {
        name: 'link',
        description: chalk.yellow("Type the link to generate QR code:"),
    },
    {
        name: "type",
        description: chalk.yellow("Choose the type of QR code: (1-IMAGE or 2-TERMINAL)"),
        pattern: /^[1|2]+$/,
        message: chalk.red.italic("Select 1 or 2"),
        required: true,
    }
]

export default qrCodePrompt