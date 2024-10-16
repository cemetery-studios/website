import './help.css';
import Navbar from '../Navbar/Navbar';
import botmodules from './cogs.json';

const Help = () => {
  return (
    <>
      <Navbar />
      <hr />
      <div className="main_help">
        <div className="sidebar">
          <div className="tab-container">
            {botmodules.cogs.map(cog => {
              return (
                <button
                  className="tab"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'https://docs.gravebot.xyz/';
                  }}
                >
                  {cog.name}
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
