# eos-icons-Vue 2
[![Open Source Love svg2](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
[![NPM Package](https://img.shields.io/npm/v/eos-icons-vue2.svg)](https://www.npmjs.com/package/eos-icons-vue2) 
[![NPM Downloads](https://img.shields.io/npm/dm/eos-icons-vue2.svg)](https://www.npmjs.com/package/eos-icons-vue2)

## Using eos-icons-react in your projects
Refer to [EOS Icons](https://eos-icons.com/) for more details about all the icons that are supported by EOS-Icons Vue 2

[Storybook EOS-Icons](https://storybook.eos-icons.com/), checkout storybook for an in-depth look at the various different icons that are provided by EOS-Icons Vue 2 as well the props available for configuring icons.

[Nuxt Sandbox](https://codesandbox.io/s/billowing-water-62klc?file=/components/Tutorial.vue), checkout this Nuxt sandbox for testing out the icons as well as 'How to use it'

### Installation
```
# yarn
yarn add eos-icons-vue2
# npm
npm install eos-icons-vue2
```

### Usage
#### common icons usage

```vue
<template>
  <div>
    <EOS_10K_FILLED />
    <EOS_10K_OUTLINED />
    <EOS_LOADING_ANIMATED />
  </div>
</template>

<script>
import { EOS_10K_FILLED, EOS_10K_OUTLINED, EOS_LOADING_ANIMATED } from "eos-icons-vue2";

export default {
  name: "App",
  components: {
    EOS_10K_FILLED,
    EOS_10K_OUTLINED,
    EOS_LOADING_ANIMATED
  },
};
</script>
```
### Props
#### Prop usage
```vue
<template>
  <div>
    <EOS_10K_FILLED size="xl" color="cyan" rotate="120" verticalFlip="true" horizontalFlip="true"/>
  </div>
</template>

<script>
import { EOS_10K_FILLED } from "eos-icons-vue2";

export default {
  name: "App",
  components: {
    EOS_10K_FILLED
  },
};
</script>
```

#### Prop Details
| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|
| size | string | 'm' | sets the size of icon * |
| color | string | '#000000 | sets the color of icon |
| rotate | string | '0' | sets the rotation degree of icon |
| horizontalFlip | boolean | false | Flips icon horizontally |
| verticalFlip | boolean | false | Flips icon vertically |

> (*) Size can be provided using either string or number. Pre-Defined size list

| Size Name | Size Value |
|:-----|:-----|
| xs | 4 |
| s | 8 |
| base | 14 |
| m | 18 |
| l | 24 |
| xl | 32 |
| xxl | 48 |
| xxxl | 64 |

> (**) The theme prop is only available for common icon component. Eos-Icons React has 4 different types of icon components (common / filled / outlined / animated). The common icon component contains both filled and outlined version of the icon. For switching between the two types of version you can either supply 'outlined' or 'filled' to the theme prop. 

## Development of EOS icons React
- Cloning the repo: 
```
git clone https://github.com/EOS-uiux-Solutions/eos-icons-vue2
```

- run for installing all the required dependencies.
```
npm install
```

### Package build command
- run for producing the final build files.
```
npm run generate
```

<!-- ### Testing
Follow the above steps before running the test command. The test sequence requires the presence of the final build files in order to test them.

- run to start the testing of the final build files using Jest.
```
npm run test
``` -->


## Learn more about the EOS UX/UI Solutions

- [EOS Icons](https://eos-icons.com)

- [EOS User Story](https://userstory.site)

- [Follow us on Twitter](https://twitter.com/eos_uxui)

- [Join us on Slack](https://slack.userstory.site)


# Our "thank you" section

### Tested for every browser in every device

Thanks to [Browserstack](https://www.browserstack.com) and their continuous contribution to open source projects, we continuously test the EOS to make sure all our features and components work perfectly fine in all browsers.
Browserstack helps us make sure our Design System also delivers a peace of mind to all developers and designers making use of our components and layout in their products.

