import { Badge } from "primereact/badge"
import styled, { css } from "styled-components"

export const BadgeWrapper = styled(Badge)`
  ${props =>
    props.overlay &&
    css`
      position: absolute;
      top: ${props => props.top};
      bottom: ${props => props.bottom};
      right: ${props => props.right};
      left: ${props => props.left};
    `}

  color: #ffffff !important;
  font-size: 0.7rem;
  font-weight: 400;
  min-width: 1rem;
  height: 1rem;
  line-height: 1rem;
`

const BadgeComponent = ({
  value,
  severity = "danger",
  overlay = false,
  top,
  right,
  left,
  bottom,
}) => {
  return (
    <BadgeWrapper
      className="p-mr-2"
      value={value}
      severity={severity}
      overlay={overlay}
      top={top}
      right={right}
      left={left}
      bottom={bottom}
    ></BadgeWrapper>
  )
}

export default BadgeComponent
