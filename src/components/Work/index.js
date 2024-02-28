import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import MQLogo from '../../assets/images/mediaqueryinc_logo.jpeg'

const WorkExperience = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(timerId) // Cleanup function
  }, [])

  return (
    <>
      <div className="container work-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                'W',
                'o',
                'r',
                'k',
                ' ',
                'E',
                'x',
                'p',
                'e',
                'r',
                'i',
                'e',
                'n',
                'c',
                'e',
              ]}
              idx={15}
            />
          </h1>
          <div className="work-container">
            <div className="work-list">
              <div className="work-title-container">
                <img className="work-logo" src={MQLogo} alt="Media Query" />
                <h3 className="work-title">Software Developer</h3>
              </div>
              <p className="work-text">Media Query Inc. - Full time</p>
              <p className="work-date">October 2022 - December 2023</p>
              <p className="work-text">Miami, FL, United States - Remote</p>
              <br />
              <p className="work-text">
                • Developed and refined custom web pages using TypeScript to
                meet client needs.
                <br />
                <br />
                • Enhanced the SQL database, optimizing its architecture for
                improved performance and scalability.
                <br />
                <br />• My role ensured seamless integration of dynamic content
                and responsive design, resulting in sophisticated digital
                experiences that exceeded client expectations.
              </p>
              <p className="work-skills">
                Javascript, Typescript, Angular, SQL
              </p>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default WorkExperience
