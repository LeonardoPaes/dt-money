import { HeaderContainer, HeaderContent, NewTransanctionButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import logoImage from '../../assets/logo.svg'
import { NewTransactionModal } from './../NewTransactionModal/index'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImage} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransanctionButton>Nova transação</NewTransanctionButton>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
