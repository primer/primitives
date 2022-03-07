import React, {Fragment} from 'react'
import { Box, Text } from '@primer/components'
import Table from '@primer/gatsby-theme-doctocat/src/components/table.js';
// import baseTokens from '../../../dist/new/tokens/tokensBase.js'
// import ghTokens from '../../../dist/new/tokens/tokensGH.js'
import tokens from '../../../dist/docs/docValues.json'

// console.log(Object.entries(ghTokens.size.control))

export function NewTable({filePath}) {
    // return <pre>{JSON.stringify(tokens[filePath], null, 2)}</pre>
    return <Table>
                 <thead>
                     <tr>
                         <Box as="th" textAlign="left">
                             CSS variable
                        </Box>
                        <Box as="th" textAlign="left">
                            JS variable
                        </Box>
                         <Box as="th" textAlign="left">
                             Value
                        </Box>
                        <Box as="th" textAlign="left">
                             Pixel equivalant
                         </Box>
                     </tr>
                 </thead>
                 <tbody>
                 {tokens[filePath].map(token => {
                     return (
                             <tr>
                                 <td><code>--{token.name}</code></td>
                                 <td><code>{token.path.join('.')}</code></td>
                                    <td><code>{token.value}</code></td>
                             <td><code>{token.original.value}</code></td>
                             </tr>
                     )
                 })}
                 </tbody>
             </Table>
}

// export function TokenTable({ id }) {
//     // const mapped = Object.keys(baseTokens.weight.text).map(([name, value]) => `${name}, ${value}`);
//     const objectArrayTextWeight = Object.values(baseTokens.weight.text);
//     const objectArraySizeBorderWidth = Object.values(baseTokens.size.borderWidth);
//     const objectArraySizeRadius = Object.values(baseTokens.size.borderRadius);
//     const objectArraySizeBreakpoint = Object.values(baseTokens.size.breakpoint);
//     const objectArraySize = Object.values(baseTokens.size.size);
//     const objectArraySizeText = Object.values(baseTokens.size.text);
//     const objectArraySizeBoxShadow = Object.values(ghTokens.size.boxShadow);
//     const objectArraySizeBorder = Object.values(ghTokens.size.border);
//     const objectArraySizeMinTarget = Object.values(ghTokens.size.controlMinTarget);
//     const objectArraySizeControl = Object.values(ghTokens.size.control.paddingInline);
//     const objectArraySizeSection = Object.values(ghTokens.size.section);
//     const objectArraySizeViewport = Object.values(ghTokens.size.viewport);
//     return (
//         <Fragment>
//             <h1>Base</h1>
//             <h2>Text size</h2>
//             <Table>
//                 <thead>
//                     <tr>
//                         <Box as="th" textAlign="left">
//                             Name
//                         </Box>
//                         <Box as="th" textAlign="left">
//                             Value
//                         </Box>
//                     </tr>
//                 </thead>
//                 <tbody>
//                 {objectArraySizeText.map(item => {
//                     return (
//                         <Fragment>
//                             <tr>
//                                 <td><pre>--{item.name}</pre></td>
//                                 <td>{item.value}</td>
//                             </tr>
//                         </Fragment>
//                     )
//                 })}
//                 </tbody>
//             </Table>
//             <h2>Text weight</h2>
//             <Table>
//                 <thead>
//                     <tr>
//                         <Box as="th" textAlign="left">
//                             Name
//                         </Box>
//                         <Box as="th" textAlign="left">
//                             Value
//                         </Box>
//                     </tr>
//                 </thead>
//                 <tbody>
//                 {objectArrayTextWeight.map(item => {
//                     return (
//                         <Fragment>
//                             <tr>
//                                 <td><pre>--{item.name}</pre></td>
//                                 <td>{item.value}</td>
//                             </tr>
//                         </Fragment>
//                     )
//                 })}
//                 </tbody>
//             </Table>
//             <h2>Border width</h2>
//             <Table>
//                 <thead>
//                     <tr>
//                         <Box as="th" textAlign="left">
//                             Name
//                         </Box>
//                         <Box as="th" textAlign="left">
//                             Value
//                         </Box>
//                     </tr>
//                 </thead>
//                 <tbody>
//                 {objectArraySizeBorderWidth.map(item => {
//                     return (
//                         <Fragment>
//                             <tr>
//                                 <td><pre>--{item.name}</pre></td>
//                                 <td>{item.value}</td>
//                             </tr>
//                         </Fragment>
//                     )
//                 })}
//                 </tbody>
//             </Table>
//             <h2>Border radius</h2>
//             <Table>
//                 <thead>
//                     <tr>
//                         <Box as="th" textAlign="left">
//                             Name
//                         </Box>
//                         <Box as="th" textAlign="left">
//                             Value
//                         </Box>
//                     </tr>
//                 </thead>
//                 <tbody>
//                 {objectArraySizeRadius.map(item => {
//                     return (
//                         <Fragment>
//                             <tr>
//                                 <td><pre>--{item.name}</pre></td>
//                                 <td>{item.value}</td>
//                             </tr>
//                         </Fragment>
//                     )
//                 })}
//                 </tbody>
//             </Table>
//             <h2>Breakpoint</h2>
//             <Table>
//                 <thead>
//                     <tr>
//                         <Box as="th" textAlign="left">
//                             Name
//                         </Box>
//                         <Box as="th" textAlign="left">
//                             Value
//                         </Box>
//                     </tr>
//                 </thead>
//                 <tbody>
//                 {objectArraySizeBreakpoint.map(item => {
//                     return (
//                         <Fragment>
//                             <tr>
//                                 <td><pre>--{item.name}</pre></td>
//                                 <td>{item.value}</td>
//                             </tr>
//                         </Fragment>
//                     )
//                 })}
//                 </tbody>
//             </Table>
//             <h2>Size</h2>
//             <Table>
//                 <thead>
//                     <tr>
//                         <Box as="th" textAlign="left">
//                             Name
//                         </Box>
//                         <Box as="th" textAlign="left">
//                             Value
//                         </Box>
//                     </tr>
//                 </thead>
//                 <tbody>
//                 {objectArraySize.map(item => {
//                     return (
//                         <Fragment>
//                             <tr>
//                                 <td><pre>--{item.name}</pre></td>
//                                 <td>{item.value}</td>
//                             </tr>
//                         </Fragment>
//                     )
//                 })}
//                 </tbody>
//             </Table>

//             <h1>Functional</h1>
//             <h2>Border</h2>
//             <Table>
//                 <thead>
//                     <tr>
//                         <Box as="th" textAlign="left">
//                             Name
//                         </Box>
//                         <Box as="th" textAlign="left">
//                             Value
//                         </Box>
//                     </tr>
//                 </thead>
//                 <tbody>
//                 {objectArraySizeBorder.map(item => {
//                     return (
//                         <Fragment>
//                             <tr>
//                                 <td><pre>--{item.name}</pre></td>
//                                 <td>{item.value}</td>
//                             </tr>
//                         </Fragment>
//                     )
//                 })}
//                 </tbody>
//             </Table>
//             <h2>Control size</h2>
//             <Table>
//                 <thead>
//                     <tr>
//                         <Box as="th" textAlign="left">
//                             Name
//                         </Box>
//                         <Box as="th" textAlign="left">
//                             Value
//                         </Box>
//                     </tr>
//                 </thead>
//                 <tbody>
//                 {objectArraySizeControl.map(item => {
//                     return (
//                         <Fragment>
//                             <tr>
//                                 <td><pre>--{item.name}</pre></td>
//                                 <td>{item.value} ({item.comment})</td>
//                             </tr>
//                         </Fragment>
//                     )
//                 })}
//                 </tbody>
//             </Table>
//             <h2>Section size</h2>
//             <Table>
//                 <thead>
//                     <tr>
//                         <Box as="th" textAlign="left">
//                             Name
//                         </Box>
//                         <Box as="th" textAlign="left">
//                             Value
//                         </Box>
//                     </tr>
//                 </thead>
//                 <tbody>
//                 {objectArraySizeSection.map(item => {
//                     return (
//                         <Fragment>
//                             <tr>
//                                 <td><pre>--{item.name}</pre></td>
//                                 <td>{item.value}</td>
//                             </tr>
//                         </Fragment>
//                     )
//                 })}
//                 </tbody>
//             </Table>
//             <h2>Viewport size</h2>
//             <Table>
//                 <thead>
//                     <tr>
//                         <Box as="th" textAlign="left">
//                             Name
//                         </Box>
//                         <Box as="th" textAlign="left">
//                             Value
//                         </Box>
//                     </tr>
//                 </thead>
//                 <tbody>
//                 {objectArraySizeViewport.map(item => {
//                     return (
//                         <Fragment>
//                             <tr>
//                                 <td><pre>--{item.name}</pre></td>
//                                 <td>{item.value}</td>
//                             </tr>
//                         </Fragment>
//                     )
//                 })}
//                 </tbody>
//             </Table>
//             <h2>Target size</h2>
//             <Table>
//                 <thead>
//                     <tr>
//                         <Box as="th" textAlign="left">
//                             Name
//                         </Box>
//                         <Box as="th" textAlign="left">
//                             Value
//                         </Box>
//                     </tr>
//                 </thead>
//                 <tbody>
//                 {objectArraySizeMinTarget.map(item => {
//                     return (
//                         <Fragment>
//                             <tr>
//                                 <td><pre>--{item.name}</pre></td>
//                                 <td>{item.value}</td>
//                             </tr>
//                         </Fragment>
//                     )
//                 })}
//                 </tbody>
//             </Table>
//             <h2>Box shadow</h2>
//             <Table>
//                 <thead>
//                     <tr>
//                         <Box as="th" textAlign="left">
//                             Name
//                         </Box>
//                         <Box as="th" textAlign="left">
//                             Value
//                         </Box>
//                     </tr>
//                 </thead>
//                 <tbody>
//                 {objectArraySizeBoxShadow.map(item => {
//                     return (
//                         <Fragment>
//                             <tr>
//                                 <td><pre>--{item.name}</pre></td>
//                                 <td>{item.value}</td>
//                             </tr>
//                         </Fragment>
//                     )
//                 })}
//                 </tbody>
//             </Table>
//         </Fragment>
//     )
// }
