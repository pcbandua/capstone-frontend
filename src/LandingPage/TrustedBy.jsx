const stats = [
  { id: 1, name: 'Apprentices served and matched with mentors across 50+ industries', value: '12,000' },
  { id: 2, name: 'Apprenticeship match satisfaction', value: '94%' },
  { id: 3, name: 'Employer partners nationally', value: '200+' },
]

export default function TrustedBy() {
  return (
    <div className="bg-lime-400 py-24 sm:py-32 rounded-xl mb-4">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 text-gray-900">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
