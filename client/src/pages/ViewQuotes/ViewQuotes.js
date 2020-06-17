import React, { useEffect, useState } from 'react';
import { Container, List, ListItem, Col, Row, Brick } from '../../components/QuotePost';
import API from '../../utils/API';
import "./ViewQuotes.css"

const ViewQuotes = () => {
	
	const[quotes, setQuotes] = useState([])

	useEffect(() => {
		loadQuotes()
	}, [])// if you put something inside of this empty array, then you can make useEffect fire ONLY when that condition is met

	function loadQuotes() {
		API.getQuotes()
			.then(res => 
				setQuotes(res.data)
			)
			.catch(err => console.log(err));
	}

	return (
		<Container fluid>
			<Row id="quoteView">
				<Col size="md-6 sm-12">
					{quotes.length ? (
						<List>
							{quotes.map(quote => {
								return(
								<ListItem key={quote._id}>
									<Brick data={quote} />
								</ListItem>
								)
							})}
						</List>
					) : (
						<h3>No results to Display</h3>
					)}
				</Col>
			</Row>
		</Container>
	)
}


export default ViewQuotes;