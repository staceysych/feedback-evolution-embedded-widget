import { FeedbackWidget } from './components'

function App({projectId}: {projectId: string}) {

  console.log('here')

  return (
      <FeedbackWidget projectId={projectId} open />

  )
}

export default App
