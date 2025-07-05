import Image from "next/image"

const CTA = () => {
  return (
    <section className='cta-section'>
      <div className='cta-badge'>Start learning your way.</div>
      <h2 className='text-3xl font-bold'>
        Build and Personalize Learning Companion
      </h2>
      <p>Pick a name, voice & personality - and start learning through voice conversations that feel natural and fun.</p>
      <Image src='images/cta.svg' alt='cta'></Image>
    </section>
  )
}

export default CTA
