import styled from 'styled-components'

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: #ededed;
  color: #000;
  text-transform: uppercase;
  font-family: 'Open Sans Condensed', sans-serif;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
`
export const GoogleButton = styled(BaseButton)`
  border-radius: 50px;
  background-color: #4285f4;
  color: #fff;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`
export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

    &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`
export const NeumorphismButton = styled(BaseButton)`
  border-radius: 51px;
  background: #ffffff;
  box-shadow:  6px 6px 12px #dedede,-6px -6px 12px #ffffff;

    &:hover {
      border-radius: 51px;
      background: #ffffff;
      box-shadow: inset 6px 6px 12px #dedede,
                  inset -6px -6px 12px #ffffff;
  }
`