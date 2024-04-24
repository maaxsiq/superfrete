import * as S from './styles'
import { AddMessage } from "../../components/AddMessage"
import { ListMessage } from "../../components/ListMessage"

export const Home: React.FC = () => {

  return (
    <S.Container>
      <S.Logo src={require('../../assets/Logo.png')}/>
      <AddMessage data-testid="add-message-component"/>
      <ListMessage data-testid="list-message-component"/>
    </S.Container>
  )
}
