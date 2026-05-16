// components/Marquee.jsx
// Replace your existing Marquee.jsx with this file

const cards = [
  {
    icon: '⬡',
    tag: 'Engineering',
    title: 'Web Engineering',
    desc: 'Full-stack React & Next.js products built to scale — fast, accessible, maintainable.',
  },
  {
    icon: '◎',
    tag: 'Mobile',
    title: 'Mobile Apps',
    desc: 'Native iOS & Android experiences that users open every single day.',
  },
  {
    icon: '⌁',
    tag: 'Infrastructure',
    title: 'Cloud Architecture',
    desc: 'Resilient, auto-scaling infrastructure with zero-downtime deployments.',
  },
  {
    icon: '✦',
    tag: 'Intelligence',
    title: 'AI Integration',
    desc: 'LLMs, vision models, and recommendation engines woven into your product.',
  },
  {
    icon: '⊞',
    tag: 'Design',
    title: 'Design Systems',
    desc: 'Cohesive component libraries that make every team move faster.',
  },
  {
    icon: '◈',
    tag: 'Research',
    title: 'UX Research',
    desc: 'Deep user insight that turns assumptions into evidence-backed decisions.',
  },
]

// Double for seamless loop
const doubled = [...cards, ...cards]

function Marquee() {
  return (
    <section className="marquee-wrap reveal">
      <div className="marquee-track marquee-track-cards">
        {doubled.map((card, i) => (
          <div className="marquee-card" key={i}>
            <div className="marquee-card-top">
              <span className="marquee-card-icon">{card.icon}</span>
              <span className="marquee-card-tag chip">{card.tag}</span>
            </div>
            <h3 className="marquee-card-title">{card.title}</h3>
            <p className="marquee-card-desc">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Marquee