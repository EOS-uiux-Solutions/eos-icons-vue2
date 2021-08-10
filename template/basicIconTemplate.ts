import { TemplateProps } from '../interface/index'

function componentTemplate ({ fileName, data }:TemplateProps) {
  const render = `
  const EOS_${fileName} = {
    props: {
      color: String,
      size: String,
      deg: String,
      horizontalFlip: Boolean,
      verticalFlip: Boolean
    },
    methods: {
      sizeFunction(size) {
        if(!size) {
          size = "m"
        }
        let ValueMap = {
          xs: 4,
          s: 8,
          base: 14,
          m: 18,
          l: 24,
          xl: 32,
          xxl: 48,
          xxxl: 64
        };
        if (Object.keys(ValueMap).includes(size)) {
          size = ValueMap[size];
        }
        return size;
      },
      transform(deg, horizontalFlip, verticalFlip) {
        if (!deg) {
          deg = "0";
        }
        let translateX = 0;
        let translateY = 0;
        let scaleX = 1;
        let scaleY = 1;
  
        if (horizontalFlip) {
          scaleX = -1;
          translateX = 0;
        }
  
        if (verticalFlip) {
          scaleY = -1;
          translateY = 0;
        }
  
        return (
          "rotate(" +
          deg +
          " 0 0)" +
          "translate(" +
          translateX +
          "," +
          translateY +
          ") scale(" +
          scaleX +
          "," +
          scaleY +
          ")"
        );
      }
    },
    template:
      '${data}'
  };
  
  export default EOS_${fileName};
`
  return (render)
}



export default componentTemplate
