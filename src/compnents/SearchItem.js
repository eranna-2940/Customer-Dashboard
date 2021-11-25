import React from 'react';

function SearchItem(props) {

    const{inputText,callBackFunc} = props;

    return (
        <div className='mr-4 border mt-3'>

            <form>

                <input 
                    type="text" 
                    placeholder='search by name or mobile number' 
                    style={{width:'228px'}} 
                    value={inputText}
                    onChange={callBackFunc}
                />

            </form>
            
        </div>
    )
}

export default SearchItem;