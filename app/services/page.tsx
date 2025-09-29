import ServicesGrid from '@/components/site/ServicesGrid'
import Process from '@/components/site/Process'

export const metadata = { title: 'Services • Integritrade LLC' }

export default function ServicesPage(){
  return (
    <>
      <div className=' bg-gray-50'>
        <ServicesGrid />
        <Process />
      </div>
    </>
  )
}
