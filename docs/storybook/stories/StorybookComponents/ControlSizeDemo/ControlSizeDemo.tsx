// import React from 'react'

// export type ControlSizeDemoProps = {
//   paddingLeft?: string
//   paddingRight?: string
//   paddingTop?: string
//   paddingBottom?: string
//   gap?: string
//   blockSize?: string
//   lineBox?: string
//   modifier?: string
//   highlightPaddingBottom?: boolean
//   highlightPaddingTop?: boolean
//   highlightPaddingRight?: boolean
//   highlightPaddingLeft?: boolean
//   highlightGap?: boolean
//   highlightLineBoxHeight?: boolean
//   highlightHeight?: boolean
// }

// export const ControlSizeDemo = ({
//   paddingLeft,
//   paddingRight,
//   paddingTop,
//   paddingBottom,
//   gap,
//   blockSize,
//   lineBox,
//   modifier,
//   highlightPaddingBottom,
//   highlightPaddingTop,
//   highlightPaddingRight,
//   highlightPaddingLeft,
//   highlightGap,
//   highlightLineBoxHeight,
//   highlightHeight,
// }: ControlSizeDemoProps) => {
//   return (
//     <div
//       style={{
//         display: 'inline-grid',
//         gridTemplateAreas: `'pTop pTop pTop pTop pTop' 'pLeft icon gap label pRight' 'pBottom pBottom pBottom pBottom pBottom'`,
//         gridTemplateRows: 'min-content minmax(0, 1fr) min-content',
//         gridTemplateColumns: 'repeat(5, min-content)',
//         borderRadius: '2',
//         border: 'solid 1px #c297ff',
//         height: `var(--primer-control-${blockSize}-size)`,
//         backgroundImage:
//           highlightHeight &&
//           'linear-gradient(45deg,#a475f980 12.50%,#d8b9ff7a 12.50%,#d8b9ff7a 50%,#a475f980 50%,#a475f980 62.50%,#d8b9ff7a 62.50%,#d8b9ff7a 100%)',
//         backgroundSize: '5.66px 5.66px',
//         alignItems: 'center',
//       }}
//     >
//       <span
//         style={{
//           gridArea: 'pTop',
//           height: `var(--primer-control-${paddingTop}-paddingBlock)`,
//           backgroundImage:
//             highlightPaddingTop &&
//             'linear-gradient(45deg,#a475f980 12.50%,#d8b9ff7a 12.50%,#d8b9ff7a 50%,#a475f980 50%,#a475f980 62.50%,#d8b9ff7a 62.50%,#d8b9ff7a 100%)',
//           backgroundSize: '5.66px 5.66px',
//         }}
//       />
//       <span
//         style={{
//           gridArea: 'pLeft',
//           width: `var(--primer-control-${paddingLeft}-paddingInline${modifier})`,
//           backgroundImage:
//             highlightPaddingLeft &&
//             'linear-gradient(45deg,#a475f980 12.50%,#d8b9ff7a 12.50%,#d8b9ff7a 50%,#a475f980 50%,#a475f980 62.50%,#d8b9ff7a 62.50%,#d8b9ff7a 100%)',
//           backgroundSize: '5.66px 5.66px',
//           height: '100%',
//         }}
//       />
//       <span
//         style={{
//           gridArea: 'icon',
//           display: 'flex',
//           alignItems: 'center',
//           backgroundColor: 'fg.subtle',
//           width: '1rem',
//           height: '1rem',
//           borderRadius: 1,
//         }}
//       />
//       <span
//         style={{
//           gridArea: 'gap',
//           width: `var(--primer-control-${gap}-gap)`,
//           backgroundImage:
//             highlightGap &&
//             'linear-gradient(45deg,#a475f980 12.50%,#d8b9ff7a 12.50%,#d8b9ff7a 50%,#a475f980 50%,#a475f980 62.50%,#d8b9ff7a 62.50%,#d8b9ff7a 100%)',
//           backgroundSize: '5.66px 5.66px',
//           height: '100%',
//         }}
//       />
//       <span
//         style={{
//           gridArea: 'label',
//           lineHeight: `var(--primer-control-${lineBox}-lineBoxHeight)`,
//           backgroundImage:
//             highlightLineBoxHeight &&
//             'linear-gradient(45deg,#a475f980 12.50%,#d8b9ff7a 12.50%,#d8b9ff7a 50%,#a475f980 50%,#a475f980 62.50%,#d8b9ff7a 62.50%,#d8b9ff7a 100%)',
//           backgroundSize: '5.66px 5.66px',
//           fontSize: 'var(--primer-text-body-size-medium)',
//         }}
//       >
//         label
//       </span>
//       <span
//         style={{
//           gridArea: 'pRight',
//           width: `var(--primer-control-${paddingRight}-paddingInline${modifier})`,
//           backgroundImage:
//             highlightPaddingRight &&
//             'linear-gradient(45deg,#a475f980 12.50%,#d8b9ff7a 12.50%,#d8b9ff7a 50%,#a475f980 50%,#a475f980 62.50%,#d8b9ff7a 62.50%,#d8b9ff7a 100%)',
//           backgroundSize: '5.66px 5.66px',
//           height: '100%',
//         }}
//       />
//       <span
//         as="span"
//         style={{
//           gridArea: 'pBottom',
//           height: `var(--primer-control-${paddingBottom}-paddingBlock)`,
//           backgroundImage:
//             highlightPaddingBottom &&
//             'linear-gradient(45deg,#a475f980 12.50%,#d8b9ff7a 12.50%,#d8b9ff7a 50%,#a475f980 50%,#a475f980 62.50%,#d8b9ff7a 62.50%,#d8b9ff7a 100%)',
//           backgroundSize: '5.66px 5.66px',
//         }}
//       />
//     </div>
//   )
// }

// export default ControlSizeDemo

// ControlSizeDemo.displayName = 'ControlSizeDemo'
