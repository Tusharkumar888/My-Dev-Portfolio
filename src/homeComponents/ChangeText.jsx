import { Cursor, useTypewriter } from 'react-simple-typewriter'

export const ChangeText = () => {
    const [text] = useTypewriter({
      words: ['Frontend Development', 'Backend Development', 'Web Development', 'Coding'],
      loop: true,
    })
  
    return (
      <div className=' text-2xl font-sans font-medium'>
        <span>I am into </span>
        <span className='text-red-700'>{text}</span>
        <span className='text-red-700'>
        <Cursor />
        </span>
      </div>
    )
  }