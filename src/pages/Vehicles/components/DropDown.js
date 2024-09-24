import React, { useState } from 'react';
import styles from '../components/DropDown.module.scss';
import myStyles from './DropDown.module.scss';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '../../../components/Buttons/Button';



const Dropdown = ({ data, refetch }) => {
	

	const [volume, setVolume] = useState('0-20000000');
	const [industry, setIndustry] = useState('');
	const [score, setScore] = useState('');
	const [price, setPrice] = useState('0-3000');
	const [marketCap, setMartketCap] = useState('0-3000000000000');

	const handleChange = (event, updaterFunction) => {
		updaterFunction(event.target.value);
	};

	const handleReset = () => {
		setPrice('0-3000');
		setMartketCap('0-3000000000000');
		setIndustry('');
		setVolume('0-20000000');
		if (refetch !== undefined) refetch();
	};

	const handleSearch = () => {
		data?.forEach((item) => {
			item.lastsale = item.lastsale.replace('$', '');
			return item;
		});
		/**const numbers = Array.from(price.split('-'), Number);
		const splitVolume = Array.from(volume.split('-'), Number);
		const splitMarketCap = Array.from(marketCap.split('-'), Number);**/
	
		
	};

	return (
		<>
			<div className={styles.dropdown}>
				<FormControl className={myStyles.formControl} sx={{ m: 1, minWidth: 120, width: 400 }}>
					<InputLabel
						sx={{ color: 'white', fontWeight: 500, fontSize: '16px', marginTop: '-35px' }}
						id="demo-simple-select-helper-label"
					>
						Model
					</InputLabel>
					<Select
						labelId="demo-simple-select-helper-label"
						id="demo-simple-select-helper"
						value={industry}
						label="Industry"
						onChange={(e) => handleChange(e, setIndustry)}
						style={{ backgroundColor: '#D9D9D9' }}
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value={'BMW 3 Series'}>
                            BMW 3 Series
						</MenuItem>
						<MenuItem value={'BMW 5 Series'}>BMW 5 Series</MenuItem>
						<MenuItem value={'Toyota Land Cruiser'}>Toyota Land Cruiser</MenuItem>
						<MenuItem value={'Toyota Hilux'}>Toyota Hilux</MenuItem>
						<MenuItem value={'Toyota Corrola'}>Toyota Corrola</MenuItem>
					</Select>
				</FormControl>

				<FormControl className={myStyles.formControl} sx={{ m: 1, minWidth: 120, width: 250 }}>
					<InputLabel
						sx={{ color: 'white', fontWeight: 500, fontSize: '16px', marginTop: '-35px' }}
						id="demo-simple-select-helper-label"
					>
						Year
					</InputLabel>
					<Select
						labelId="demo-simple-select-helper-label"
						id="demo-simple-select-helper"
						value={score}
						label="Score"
						onChange={(e) => handleChange(e, setScore)}
						style={{ backgroundColor: '#D9D9D9' }}
					>
						<MenuItem value="">
							<em>None</em>
						</MenuItem>
						<MenuItem value={'1990 -1995'}>1990 -1995</MenuItem>
						<MenuItem value={'1995 - 2000'}>1995 - 2000</MenuItem>
						<MenuItem value={'2000 - 2005'}>2000 - 2005</MenuItem>
						<MenuItem value={'2005 - 2010'}>2005 - 2010</MenuItem>
						<MenuItem value={'2010 - 2015'}>2010 - 2015</MenuItem>
                        <MenuItem value={'2015 - 2020'}>2015 - 2020</MenuItem>
                        <MenuItem value={'2020 - Current'}>2020 - Current</MenuItem>
					</Select>
				</FormControl>

				<FormControl className={myStyles.formControl} sx={{ m: 1, minWidth: 120, width: 250 }}>
					<InputLabel
						sx={{ color: 'white', fontWeight: 500, fontSize: '20px', marginTop: '-10px' }}
						id="demo-simple-select-helper-label"
					>
						Price
					</InputLabel>
					<Select
						labelId="demo-simple-select-helper-label"
						id="demo-simple-select-helper"
						value={price}
						label="Price"
						onChange={(e) => handleChange(e, setPrice)}
						style={{ backgroundColor: '#D9D9D9' }}
					>
						<MenuItem value={'0-3000'}>
							<em>Any</em>
						</MenuItem>
						<MenuItem value={'1-20'}>$1 to $20</MenuItem>
						<MenuItem value={'20-40'}>$20 to $40</MenuItem>
						<MenuItem value={'40-60'}>$40 to $60</MenuItem>
						<MenuItem value={'80-100'}>$80 to $100</MenuItem>
						<MenuItem value={'100-150'}>$100 to $150</MenuItem>
						<MenuItem value={'150-2000'}>above $150</MenuItem>
					</Select>
				</FormControl>

				<FormControl className={myStyles.formControl} sx={{ m: 1, minWidth: 120, width: 250 }}>
					<InputLabel
						sx={{ color: 'white', fontWeight: 500, fontSize: '20px', marginTop: '-10px' }}
						id="demo-simple-select-helper-label"
					>
						Transmission
					</InputLabel>
					<Select
						labelId="demo-simple-select-helper-label"
						id="demo-simple-select-helper"
						value={marketCap}
						label="Age"
						onChange={(e) => handleChange(e, setMartketCap)}
						style={{ backgroundColor: '#D9D9D9' }}
					>
						<MenuItem value={'0-3000000000000'}>
							<em>Any</em>
						</MenuItem>
						<MenuItem value={'Manual'}>Manual</MenuItem>
						<MenuItem value={'Automatic'}>Automatic</MenuItem>
						
						
					</Select>
				</FormControl>

				<FormControl className={myStyles.formControl} sx={{ m: 1, minWidth: 120, width: 250 }}>
					<InputLabel
						sx={{ color: 'white', fontWeight: 500, fontSize: '20px', marginTop: '-10px' }}
						id="demo-simple-select-helper-label"
					>
						Fuel Type
					</InputLabel>
					<Select
						labelId="demo-simple-select-helper-label"
						id="demo-simple-select-helper"
						value={volume}
						label="Volume"
						onChange={(e) => handleChange(e, setVolume)}
						style={{ backgroundColor: '#D9D9D9' }}
					>
						<MenuItem value={'0-20000000'}>
							<em>Any</em>
						</MenuItem>
						<MenuItem value={'Diesel'}>Diesel</MenuItem>
                        <MenuItem value={'Petrol'}>Petrol</MenuItem>
                        <MenuItem value={'Hybrid'}>Hybrid</MenuItem>
					</Select>
				</FormControl>

				
			</div>
			<div className={styles.buttonContainer}>
				<Button name="Reset" className={styles.resetButton} onClick={handleReset} />
				<Button name="Search" className={styles.searchButton} onClick={handleSearch} />
			</div>
		</>
	);
};

export default Dropdown;