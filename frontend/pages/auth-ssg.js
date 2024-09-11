import Box from '../src/components/Box'
import Container from '../src/components/Container'
import Button from '../src/components/Button'
import { useRouter } from 'next/router'

export default function AuthPageStatic(props) {
  const router = useRouter()

  return (
    <Container>
      <Box>
        <h1>Autenticado!</h1>
        <p>Static Site Generation</p>

        <Button
          type="button"
          onClick={(event) => {
            router.push('/')
          }}
        >
          Voltar
        </Button>
        {/** Debug */}
        {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
      </Box>
    </Container>
  )
}