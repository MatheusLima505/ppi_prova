import './Main.modules.css';

export default function Main() {
  function randomImg() {
    let randomNmbr = Math.floor(Math.random() * 1000);
    return `https://picsum.photos/200?random=${randomNmbr}`;
  }

  const elementos = Array.from({ length: 5 }, (_, i) => (
    <div className="main-content" key={i}>
      <h3 style={{margin:0, marginTop: 10}}>My Text {i}</h3>
      <img src={randomImg()} className='main-image' />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
        est laborum.
      </p>
    </div>
  ));

  return <div className="main-container">{elementos}</div>;
}
