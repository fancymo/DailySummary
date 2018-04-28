### 1. commander

提供方法解析来自 process.argv 指定的参数和选项，没有匹配任何选项的参数将会放到 program.args 数组中.

.option() 方法用来定义带选项的 commander，同时也作为这些选项的文档。

```
#!/usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander');

program
  .version('0.0.1')
  .option('-p, --peppers', 'Add peppers')
  .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
  .parse(process.argv);

console.log('you ordered a pizza with:');
if (program.peppers) console.log('  - peppers');
console.log('  - %s cheese', program.cheese);
```

### 2. chalk

> Terminal string styling done right

```
chalk.<style>[.<style>...](string, [string...])
```

#### 2.1 Styles

- Modifiers: reset, bold, dim, italic, underline, inverse, hidden, strikethrough, visible
- Colors: black, red, green, yellow, blue, magenta, cyan, white, gray, .etc
- Background Colors: bgBlack, bgRed, bgGreen, bgYellow, bgBlue, .etc

#### 2.2 usage

```
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
```

##### 2.2.1标签模版字面量

```
console.log(chalk`
  There are {bold 5280 feet} in a mile.
  In {bold ${miles} miles}, there are {green.bold ${calculateFeet(miles)} feet}.
`);
```

### 3. inquirer

### 4. ora

> Elegant terminal spinner

```
const ora = require('ora');

const spinner = ora('Loading unicorns').start();

setTimeout(() => {
	spinner.color = 'yellow';
	spinner.text = 'Loading rainbows';
}, 1000);
```

### 5. download-git-repo

### 6. cheerio

> implementation of core jQuery designed specifically for the server

```
const cheerio = require('cheerio')
const $ = cheerio.load('<h2 class="title">Hello world</h2>')

$('h2.title').text('Hello there!')
$('h2').addClass('welcome')

$.html()
//=> <h2 class="title welcome">Hello there!</h2>
```
