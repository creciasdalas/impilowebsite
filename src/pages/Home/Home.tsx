import Button from '../../components/Button/Button.tsx'
import Container from '../../components/Container/Container.tsx'
import Text from '../../components/Text/Text.tsx'
import './Home.css'

function Home() {
  return (
    <Container className="home">
      <Text variant="h1">Impilo</Text>
      <section className="button-preview">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
      </section>
    </Container>
  )
}

export default Home
