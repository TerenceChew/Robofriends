const Card = ({ id, name, username, email }) => {
  return (
    <div className='bg-light-green dib pa3 br3 ma2 tc bw2 shadow-5 grow'>
      <img alt={username} src={`https://robohash.org/${id}?size=300x300`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>      
    </div>
  );
}

export default Card;