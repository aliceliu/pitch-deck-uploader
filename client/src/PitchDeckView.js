import React from 'react';

function PitchDeckView(props) {
	let title = props.file.fileName;
	if (!title) {
		title = 'No pitch deck found! Please upload one first';
	}
	const images = props.file.imagePaths.map((image, i) => {
		return (
			<div className="d-flex justify-content-center mb-3" key={i}>
				<img src={image} className="img-fluid border" alt={i}/>
			</div>
		);
	});

  return (
    <div>
    	<h1 className="d-flex justify-content-center">{title}</h1>
      {images}
    </div>
  );
}

export default PitchDeckView;
