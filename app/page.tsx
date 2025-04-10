import CTA from '@/components/CTA'
import CompanionCard from '@/components/CompanionCard'
import CompanionList from '@/components/CompanionList'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard />
        <CompanionCard />
        <CompanionCard />
      </section>

      <section className='home-section'>
        <CompanionList />
        <CTA />
      </section>
    </main>
  )
}

export default Page