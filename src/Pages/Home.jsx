import { Carousel } from 'react-bootstrap'
import Button from "react-bootstrap/Button"

const sampleStyle = {
	width: '100vw',
}
function Home() {
    return (
			<div className=' h-100 w-100'>
				<Carousel className=' h-100 w-100'>
					<Carousel.Item
						className='h-auto'
						style={sampleStyle}>
						<img
							src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'
						alt=''
						height="100%"
						width="100%"
						/>
						<Carousel.Caption>
							<h3>
							The website builder is perfect for creating a landing page with links. There are 300+ website templates available on the Weblium platform. Using the intuitive interface, you can easily create your page from blocks. You can customize them and modify their position, color, size, and style.
							</h3>
							  <div>
								<Button variant='primary'>See My Resume</Button>
								<Button variant='success'>Conatct Me</Button>
							  </div>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item
						className='h-auto'
						style={sampleStyle}>
						<img
							src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'
							alt=''
							height='100%'
							width='100%'
						/>
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item
						className='h-auto'
						style={sampleStyle}>
						<img
							src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg'
							alt=''
							height='100%'
							width='100%'
						/>
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
			</div>
		)
}

export default Home