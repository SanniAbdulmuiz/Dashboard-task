import ProjectTable from '@/components/ProjectTable'
import { data } from './data'

export default function Home() {
  return (
    <main className='min-h-screen p-6 md:p-12 bg-gray-50'>
      <ProjectTable data={data} />
    </main>
  )
}
