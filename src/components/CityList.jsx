function CityList(props){
    
    const {cities} = props;

   

    return (
        <div>
            <h1>CityList</h1>

            <ul>
                {cities.map((item, index)=>{
                    return <li key ={index}>{item}
                    
                    <a
                className="App-link"
                href="https://map.naver.com"
        
             >
                [찾아보기]
             </a>
                    
                    </li>

                    

                })}
                
            </ul>
        </div>
    );
}

export default CityList;