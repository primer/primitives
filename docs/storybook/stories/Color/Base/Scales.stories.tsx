// import React from 'react'
// import {ColorScale} from '../../Components/ColorScale'

// export default {
//   title: 'Color/Base/Scales',
//   // parameters: {
//   //   storyType: 'swatch',
//   // },
// }

// // get variable from inline style
// function getCSSVarValue(element: HTMLDivElement, variableName: string) {
//   // const element2 = element as HTMLDivElement
//   return element.style.getPropertyValue(variableName)
// }

// // get variable from wherever
// // getComputedStyle(element).getPropertyValue("--my-var");

// const bgColors = ['bgColor-default', 'bgColor-secondary', 'bgColor-disabled']

// // const para = document.querySelector('p')
// // const compStyles = window.getComputedStyle(para)
// // para.textContent =
// //   `My computed font-size is ${compStyles.getPropertyValue('font-size')},\n` +
// //   `and my computed line-height is ${compStyles.getPropertyValue('line-height')}.`

// function getCSSVariableValue(element: string, variableName: string) {
//   return getComputedStyle(element).getPropertyValue(variableName)
// }

// export const Background = () => {
//   console.log(getCSSVarValue('[data-color-scale]' as HTMLDivElement, '--bgColor-default'))
//   return (
//     <>
//       {bgColors.map(color => (
//         <ColorScale color={color} key={color} />
//       ))}
//     </>
//   )
// }
