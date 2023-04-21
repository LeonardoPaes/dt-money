import { ThemeProvider } from 'styled-components'
import { Transactions } from './pages/Transanctions'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { TransactionsProvider } from './contexts/TransactionsContext'
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
