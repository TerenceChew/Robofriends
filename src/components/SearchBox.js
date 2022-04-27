const SearchBox = ({ acquireInputValue }) => {
  return (
    <div className='pa2 ma2'>
      <input 
        className='pa3 ba b--green bg-lightest-blue' 
        type='search' 
        placeholder='search robot'
        onChange={acquireInputValue}
      />
    </div>
  );

}

export default SearchBox;