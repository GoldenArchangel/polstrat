import React from "react"
import styled from "styled-components"

export const ElementsWrapperSimple = styled.div`
  display: flex;
  flex-direction: column;

  .option {
    flex: 1;
    margin-bottom: 0px;
  }

  .detail {
    flex: 1;
    padding: 5px 0 5px 10px;

    background-color: #121212;
    border-top: 1px solid #383838;
    border-radius: 3px;
  }
`

export const TextField = (field, title, optionClass) => {
  const fieldExist = typeof field !== "undefined"

  return fieldExist ? (
    <ElementsWrapperSimple>
      <p
        className={`option share-tech-mono primary ${
          optionClass ? optionClass : ""
        }`}
      >
        {title}
      </p>
      <p className="detail">{field}</p>
    </ElementsWrapperSimple>
  ) : null
}

export const BooleanField = (field, title, optionClass) => {
  const fieldExist = typeof field !== "undefined"

  return fieldExist ? (
    <ElementsWrapperSimple>
      <p
        className={`option share-tech-mono primary ${
          optionClass ? optionClass : ""
        }`}
      >
        {title}
      </p>
      <p className="detail">{field ? "Yes" : "No"}</p>
    </ElementsWrapperSimple>
  ) : null
}

export const SimpleListField = (field, title, optionClass) => {
  return field && field.length ? (
    <ElementsWrapperSimple>
      <p
        className={`option share-tech-mono primary ${
          optionClass ? optionClass : ""
        }`}
      >
        {title}
      </p>
      <p className="detail">{field.map((l, i) => (i !== 0 ? ` ∙ ${l}` : l))}</p>
    </ElementsWrapperSimple>
  ) : null
}

export const ElementsWrapperMultiple = styled.div`
  display: flex;
  width: 100%;

  & > :first-child {
    flex: ${props => props.size1 || 1};
    margin-right: 15px;
  }

  & > :last-child {
    flex: ${props => props.size2 || 1};
  }
`

export const DoubleTextField = (
  { field1, field2, optional = false },
  optionClass
) => {
  const field1Exist = typeof field1.value !== "undefined"
  const field2Exist = typeof field2.value !== "undefined"
  const optionalExist = typeof optional.value !== "undefined"

  const fieldGroup = field1Exist || optionalExist

  return fieldGroup || field2Exist ? (
    <ElementsWrapperMultiple size1={field1.size} size2={field2.size}>
      {field1Exist ? (
        <ElementsWrapperSimple>
          <p
            className={`option share-tech-mono primary ${
              optionClass ? optionClass : ""
            }`}
          >
            {field1.title}
          </p>
          <p className="detail">{field1.res || field1.value}</p>
        </ElementsWrapperSimple>
      ) : null}

      {optionalExist ? (
        <ElementsWrapperSimple>
          <p
            className={`option share-tech-mono primary ${
              optionClass ? optionClass : ""
            }`}
          >
            {optional.title}
          </p>
          <p className="detail">{optional.res || optional.value}</p>
        </ElementsWrapperSimple>
      ) : null}

      {field2Exist ? (
        <ElementsWrapperSimple>
          <p
            className={`option share-tech-mono primary ${
              optionClass ? optionClass : ""
            }`}
          >
            {field2.title}
          </p>
          <p className="detail">{field2.res || field2.value}</p>
        </ElementsWrapperSimple>
      ) : null}
    </ElementsWrapperMultiple>
  ) : null
}
