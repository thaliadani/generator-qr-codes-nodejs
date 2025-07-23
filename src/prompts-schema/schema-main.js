import chalk from "chalk";

const mainPrompt =[
    {
        name: "select",
        description: chalk.yellow.bold( "Select an option (1-QRCODE ou 2-PASSWORD)"),
        pattern:/^(1|2)+$/,
        message: chalk.red.italic("Select 1 or 2"),
        required: true,
    }
]

export default mainPrompt