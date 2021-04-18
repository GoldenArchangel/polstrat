import styled from "styled-components"
import { AutoComplete } from "primereact/autocomplete"

const TextSearchWrapper = styled(AutoComplete)`
  min-width: 100%;

  .p-inputtext {
    min-width: 100%;
  }

  input {
    padding-left: 15px;

    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`

export default TextSearchWrapper
