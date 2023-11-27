import { faPeopleArrows, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/style.scss';

const Mode = ({ setMode }) => {

  return <div className='w-full h-full flex'>
    <div className="grid md:grid-cols-2 gap-4 px-4 w-full">
      <div className='w-full flex justify-end items-end md:items-center'>
        <div>
          <div className="card max-w-sm " onClick={() => setMode(true)}>
            <span className="icon">
              <FontAwesomeIcon icon={faPeopleArrows} />
            </span>
            <h4>1 to 1</h4>
            <p>
              Standard chunk of Lorem Ipsum used since the 1500s is showed below
              for those interested.
            </p>
            <div className="shine"></div>
            <div className="background">
              <div className="tiles">
                <div className="tile tile-1"></div>
                <div className="tile tile-2"></div>
                <div className="tile tile-3"></div>
                <div className="tile tile-4"></div>
                <div className="tile tile-5"></div>
                <div className="tile tile-6"></div>
                <div className="tile tile-7"></div>
                <div className="tile tile-8"></div>
                <div className="tile tile-9"></div>
                <div className="tile tile-10"></div>
              </div>
              <div className="line line-1"></div>
              <div className="line line-2"></div>
              <div className="line line-3"></div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-start items-start md:items-center'>
        <div>
          <div className="card max-w-sm" onClick={() => setMode(false)}>
            <span className="icon">
              <FontAwesomeIcon icon={faPeopleGroup} />
            </span>
            <h4>Room</h4>
            <p>
              Standard chunk of Lorem Ipsum used since the 1500s is showed below
              for those interested.
            </p>
            <div className="shine"></div>
            <div className="background">
              <div className="tiles">
                <div className="tile tile-1"></div>
                <div className="tile tile-2"></div>
                <div className="tile tile-3"></div>
                <div className="tile tile-4"></div>
                <div className="tile tile-5"></div>
                <div className="tile tile-6"></div>
                <div className="tile tile-7"></div>
                <div className="tile tile-8"></div>
                <div className="tile tile-9"></div>
                <div className="tile tile-10"></div>
              </div>
              <div className="line line-1"></div>
              <div className="line line-2"></div>
              <div className="line line-3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}
export default Mode;