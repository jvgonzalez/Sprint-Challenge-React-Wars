import React from 'react';

function Chloop (props) {
    console.log(props)
    const loop = props.charaterInfo.starwarsChars.map(i => i)

    return (
      <div>
        {loop.map((item, index) => (

<div class="card">
<div class="card-body">
<h1>{item.name}</h1>
<h3> Height: {item.height} </h3>
<h3> Mass: {item.mass}  </h3>
<h3> Hair color: {item.hair_color} </h3>

</div>
</div>
        
        ))}
      </div>
    );
  }

export default Chloop
