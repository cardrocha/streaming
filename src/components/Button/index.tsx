import { ButtonContainer } from './styles'

type Props = {
  type: 'button' | 'submit'
  title: string
  onClick?: () => void
  children: string
  disabled?: boolean
}

const Button = ({ type, title, onClick, children, disabled }: Props) =>
  type === 'button' || type === 'submit' ? (
    <ButtonContainer
      type={type}
      title={title}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonContainer>
  ) : null

export default Button
