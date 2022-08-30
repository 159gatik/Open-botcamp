import { suma, multiplica } from "./controller.js"
import chalk from 'chalk';

const sum = suma(1, 2)
console.log(sum);

const sum2 = suma(4, 5)
console.log(sum2);

const mult = multiplica(sum, sum2)
console.log(chalk.green(mult));

