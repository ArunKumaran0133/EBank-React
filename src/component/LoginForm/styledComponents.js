import styled from 'styled-components'

export const LoginFormBgContainer = styled.div`
  background-color: #152850;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const LoginCartContainer = styled.div`
  background-color: #e0eefe;
  width: 80%;
  min-height: 80vh;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const LoginImage = styled.img`
  height: 70%;
  width: 70%;
`
export const ImageContainer = styled.div`
  height: 80vh;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const FormContainer = styled.form`
  height: 80vh;
  width: 40%;
  background-color: white;
  border-radius: 10px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: #183b56;
  font-weight: 900;
`
export const InputContainer = styled.div``

export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 15px;
  color: #5a7184;
  font-weight: 400;
  margin-top: 20px;
`
export const Input = styled.input`
  height: 35px;
  width: 100%;
  background-color: transparent;
  border: 1px solid #c3cad9;
  outline: none;
  padding-left: 10px;
  color: #5a7184;
  font-family: 'Roboto';
  font-size: 15px;
  margin-top: 10px;
`

export const CustomButton = styled.button`
  font-family: 'Roboto';
  font-size: 13px;
  background-color: #1565d8;
  height: 33px;
  width: 100%;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  border-width: 0px;
  color: white;
  font-weight: 800;
`

export const InputsContainer = styled.div`
  height: 350px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
`
export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #ff0b37;
  font-weight: 500;
  text-align: center;
`
