import Button from '../../components/Button/Button.tsx'
import Text from '../../components/Text/Text.tsx'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <Text variant="h1">Impilo</Text>
      <section className="button-preview">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="tertiary">Tertiary</Button>
      </section>
    </div>
  )
}

export default Home
