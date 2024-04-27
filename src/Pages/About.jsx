import React from "react"
import { Container } from "react-bootstrap"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
const About = () => {
	return (
		<div>
			<Container>
				<Row>
					<Col>
						{" "}
						<img
							src='https://cdn.pixabay.com/photo/2023/08/13/18/07/woman-8188167_640.png'
							alt='image'
							className=' h-100 w-100'
						/>{" "}
					</Col>
					<Col>
						<p>
						Coming up with those perfect career objective or resume objective for freshers may seem like a daunting task. You want it to be just right to strike a chord with the interviewer but also do not want to overdo it. So, are you planning to kickstart your career and wish to revamp your CV? It is no secret that recruiters will focus on the career objective in your Resume.

They will try to interpret your personality, your future goals, and your aspirations from it. So, be mindful of what all you mention. Don’t worry; we have got you covered. Write a meaningful and persuasive career objective for Resume with us with the help of career objectives examples that we have compiled for you
A well-crafted career objective serves multiple purposes. Firstly, it provides clarity to both yourself and potential employers about your career direction and ambitions. It demonstrates that you have a clear vision of where you want to go and what you want to accomplish in your career. This clarity can help guide your career decisions and keep you focused on pursuing opportunities that align with your goals.
						</p>
						<div className='buttons'>
							<Button variant='primary'>Primary</Button>
							<Button variant='success'>Success</Button>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default About