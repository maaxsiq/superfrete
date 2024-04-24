import * as S from './styles'
import { AddMessage } from "../../components/AddMessage"
import { ListMessage } from "../../components/ListMessage"

export const Home: React.FC = () => {

  return (
    <S.Container>
      <S.Logo src={require('../../assets/Logo.png')}/>
      <AddMessage />
      <ListMessage />
    </S.Container>
  )
}
