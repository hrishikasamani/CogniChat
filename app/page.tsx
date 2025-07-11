import CTA from '@/components/CTA'
import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard
          id='123'
          name='Neaura the Brainy Explorer'
          topic='Neural Network of the Brain'
          subject='science'
          duration={45}
          color='#ffda6e'
        />
        <CompanionCard
          id='456'
          name='Countsy the Number Wizard'
          topic='Derivatives and Integrals'
          subject='math'
          duration={30}
          color='#e5d0ff'
        />
        <CompanionCard
          id='789'
          name='Verba the Vocabulary Builder'
          topic='language'
          subject='English Literature'
          duration={30}
          color='#bde7ff'
        />
      </section>

      <section className='home-section'>
        <CompanionList
          title='Recently completed sessions'
          companions={recentSessions}
          classNames='w-2/3 max-lg:w-full'
        />
        <CTA />
      </section>
    </main>
  )
}

export default Page