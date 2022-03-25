import React, {Fragment, FC} from 'react'
import CopyClipboard from '@primer/gatsby-theme-doctocat/src/components/clipboard-copy'
import styled, {createGlobalStyle} from 'styled-components'
import {Box, Text} from '@primer/components'
import Table from '@primer/gatsby-theme-doctocat/src/components/table.js'
import TokenInlineCode from '../TokenInlineCode'
import FrameworkVariableTable from './FrameworkVariableTable'
import tokens from '../../../../dist/docs/docValues.json'
import ControlVisual from '../control'

interface UISectionTableProps {
  filePath?: string
  tokenVariant?: string
}

const UISectionTable: FC<UISectionTableProps> = ({filePath, tokenVariant}) => {}

export default UISectionTable
