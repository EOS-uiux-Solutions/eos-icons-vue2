import * as path from 'path'
import * as fs from 'fs'
import { nameFunction } from '../utils/nameFunction'

async function tsBuild () {
    fs.readFile(path.resolve(__dirname, `../src/lib-components/index.ts`), 'utf8', async function (err, data) {
        if (err) {
            console.error(err)
        }
        
        fs.writeFile(
            path.resolve(__dirname, `../dist/types/lib-components/index.d.ts`),
            data,
            {
            flag: 'w+'
            },
            err => {
            if (err) {
                console.error(err)
            }
        })

        fs.writeFile(
            path.resolve(__dirname, `../dist/types/entry.esm.d.ts`),
            `import { PluginFunction } from 'vue';
declare const install: PluginFunction<any>;
export default install;
export * from "./lib-components/index";`,
            {
            flag: 'w+'
            },
            err => {
            if (err) {
                console.error(err)
            }
        })
    })

    fs.readFile(path.resolve(__dirname, `../utils/tsBuild.txt`), 'utf8', async function (err, data) {

        let iconNames = await fs.promises.readdir('svg/animated')
        for (const iconName of iconNames) {
            const type = 'animated'
            const fileName = nameFunction({ iconName, type })
            fs.writeFile(
                path.resolve(__dirname, `../dist/types/lib-components/${fileName}.d.ts`),
                data,
                {
                flag: 'w+'
                },
                err => {
                if (err) {
                    console.error(err)
                }
            })
        }

        iconNames = await fs.promises.readdir('svg/outlined')
        for (const iconName of iconNames) {
            const type = 'outlined'
            const fileName = nameFunction({ iconName, type })
            fs.writeFile(
                path.resolve(__dirname, `../dist/types/lib-components/${fileName}.d.ts`),
                data,
                {
                flag: 'w+'
                },
                err => {
                if (err) {
                    console.error(err)
                }
            })
        }

        iconNames = await fs.promises.readdir('svg/filled')
        for (const iconName of iconNames) {
            const type = 'filled'
            const fileName = nameFunction({ iconName, type })
            fs.writeFile(
                path.resolve(__dirname, `../dist/types/lib-components/${fileName}.d.ts`),
                data,
                {
                flag: 'w+'
                },
                err => {
                if (err) {
                    console.error(err)
                }
            })
        }
    })
    
}

export default tsBuild
