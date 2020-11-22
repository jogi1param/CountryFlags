import React, {Component} from 'react';

class Continent extends Component{
	constructor(props){
		super(props)
		this.state = {
			id: 0,
			continents: [
				{id: 1, name: "Asia", 
				 countries: [
					 {name: "India", flag: "IN"},
					 {name: "China", flag: "CH"},
					 {name: "Indonesia", flag: "IS"},
					 {name: "Singapore", flag: "SP"},
					 {name: "Vietnam", flag: "VN"}
				]
				 },
				 {id: 2, name: "North America", 
				 countries: [
					 {name: "USA", flag: "US"},
					 {name: "Mexico", flag: "MEX"},
					 {name: "Canada", flag: "CAN"},
					 {name: "Puerto Rico", flag: "PR"},
					 {name: "Bahamas", flag: "BH"}
				]	
				 },
				 {id: 3, name: "Europe", 
				 countries: [
					 {name: "Germany", flag: "GR"},
					 {name: "France", flag: "FR"},
					 {name: "Italy", flag: "IT"},
					 {name: "United Kingdom", flag: "UK"},
					 {name: "Poland", flag: "PL"}
				]
				 },
				 {id: 4, name: "Africa", 
				 countries: [
					 {name: "South Africs", flag: "SA"},
					 {name: "Nigeria", flag: "NIG"},
					 {name: "Kenya", flag: "KEN"},
					 {name: "Ghana", flag: "GH"},
					 {name: "Tanzania", flag: "TAN"}
				]
				 }
			]
		}

	}

	selectContinent = (id) => {
		console.log(id)
		const myId = id 
			this.setState({
				id: myId,
			})
	console.log(this.state.id)
}

	render(){

		let styles={
			listStyleType: "none",
			position: "relative",
			top: "50px",
			left: "50px"
		}

		let aStyle={
			color: 'white',
			textDecoration: 'none'
		}

		let continents = this.state.continents
		// let countries = this.state.continents.countries
		let id = this.state.id

		if(id==0){
		return(
			<div>
			<ul>
				{continents.map(elem=>{
					return(
					<li style={styles}><a href="#" style={aStyle} onClick={()=>{this.selectContinent(elem.id)}}>{elem.name}</a></li>
				)})}
			</ul>
			</div>
			)
		}

		else if(id==1){
		return(
			<div>
			{continents.map(continent=>{
				if(continent.id==id){
					return(
					<h2 style={styles}>{continent.name}</h2>
					)
				}
			})}
			<ul>
				{continents.map(elem=>{
					return(
				<li style={styles}>
					{elem.countries.map(country=>{
						if(elem.id==1){
						return(
							<div>
							<input type="checkbox" value={country.name}></input>
							<label>{country.name}</label>
							</div>
						)
					}
					})}
					</li>
				)})}
			</ul>
			</div>
			)
		}
	}
}

export default Continent