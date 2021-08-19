import * as path from 'path'
import * as fs from 'fs'

import { IconGenerateScript } from '../interface/index'
import componentTemplate from '../template/iconComponent'
import iconIndexTemplate from '../template/iconIndex'
import { nameFunction } from '../utils/nameFunction'

async function generateIconComponents ({ type, from }: IconGenerateScript) {
  const iconNames = await fs.promises.readdir(from)
  for (const iconName of iconNames) {

    const fileName = nameFunction({ iconName, type })

    // fetching Data of the required SVG file
    fs.readFile(path.resolve(__dirname, `../svg/${type}/${iconName}`), 'utf8', async function (err, data) {
      if (err) {
        console.error(err)
      }

      if (type === 'animated') {
        data = data.replace('xml:space="preserve"', '')
        if (fileName === 'INSTALLING_ANIMATED') {
          while (data.includes('class="st0"')) {
            data = data.replace('class="st0"', '')
          }
        }
      }

      const propString = 'svg v-bind:transform="transform(deg,horizontalFlip,verticalFlip)" v-bind:fill="color" v-bind:width="sizeFunction(size)" v-bind:height="sizeFunction(size)"'

      data = data.replace('svg', propString)
      data = data.replace(/\n/g, ' ');
      
      var render = componentTemplate({ fileName, data })
      const indexContent = iconIndexTemplate({ fileName })
      // creates a .vue file at src/lib-components/ containing a react component
      fs.writeFile(
        path.resolve(__dirname, `../src/lib-components/${fileName}.vue`),
        render,
        {
          flag: 'w+'
        },
        err => {
          if (err) {
            console.error(err)
          }
        })

      // creates a .ts index file at src/lib-components/ containing exports of all the icons
      fs.writeFile(
        path.resolve(__dirname, '../src/lib-components/index.ts'),
        indexContent,
        {
          flag: 'a+'
        },
        err => {
          if (err) {
            console.error(err)
          }
        })
    })
  }
}

export default generateIconComponents
