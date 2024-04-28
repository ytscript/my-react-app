import profilePic from './assets/pp.jpg';


function Card(){

    return(
        <div className="card">
            <img className='card-image' src={profilePic} alt="random" width="200px" />
            <h2 className='card-title'>Card Title</h2>
            <p className='card-text'>Card Description</p>
        </div>
    );

}


export default Card;