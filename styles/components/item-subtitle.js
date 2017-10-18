import css from 'styled-jsx/css'

import font from '../variables/font'
import { primary } from '../variables/colors'

export default css`
.root {
  font-family: ${ font };
  font-size: 12px;
  font-weight: 200;
  color: ${ primary };
  margin: 10px 0 5px 0;
}`
