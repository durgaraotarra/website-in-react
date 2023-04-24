import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/system';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import axios from 'axios';

const url = 'https://gist.githubusercontent.com/anubhavshrimal/75f6183458db8c453306f93521e93d37/raw/f77e7598a8503f1f70528ae1cbf9f66755698a16/CountryCodes.json'; 



const Contact = () => {
    const [countries, setConuntries] = useState([]);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [countryCode, setCountryCode] = useState("");
    const [phoneNumber, setPhoneNumber  ] = useState("");
    const [message, setMessage] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [countryCodeError, setCountryCodeError] = useState("");
    const [phonenumberError, setPhoneNumberError] = useState("");
    const [messageError, setMessageError] = useState("");


    const countriesList = () => {
        return fetch(url).then((response) => response.json()).then((data) => setConuntries(data));
    }
    useEffect(()=>{
        countriesList();
    },[]);


    const onFirstNameChange = (event) => {
        let firstName = event.target.value;
        if(!firstName){
            setFirstNameError("Should Not be Empty");
            return;
        } else{
            setFirstNameError("");
        }
        setFirstName(firstName);
    }

    const onLastNameChange = (event) => {
        let lastName = event.target.value;
        if(!lastName){
            setLastNameError("Should Not be Empty");
            return;
        } else{
            setLastNameError("");
        }
        setLastName(lastName);
    }

    const onEmailChange = (event) => {
        let email = event.target.value;
        if(!email){
            setEmailError("Should Not be Empty");
            return;
        } else {
            setEmailError("");
        }
        setEmail(email);
    }
    const onCountryCodeChange = (event) => {
        let countryCode = event.target.value;
        if(!countryCode){
            setCountryCodeError("Should Not be Empty");
            return;
        } else {
            setEmailError("");
        }
        setCountryCode(countryCode);
    }

    const onPhoneNumberChange = (event) => {
        let phoneNumber = event.target.value;
        if(!phoneNumber){
            setPhoneNumberError("Should Not be Empty");
            return;
        } else {
            setPhoneNumberError("");
        }
        setPhoneNumber(phoneNumber);
    }
    const clear = () => {
        setFirstName("");
        setLastName("");
        setCountryCode("");
        setPhoneNumber("");
        setEmail("");
        setMessage("");
    }
    const onMessageChange = (event) => {
        let message = event.target.value;
        if(!message){
            setMessageError("Should Not be Empty");
            return;
        } else {
            setMessageError("");
        }
        setMessage(message);
    }

    const onSubmit = () =>{
        axios.post('http://localhost:3001/savecontactus',{
            firstName,
            lastName,
            email,
            countryCode,
            phoneNo:phoneNumber,
            message
        })
        .then((response)=> {
            //console.log(response);
            alert("Thank you");
        })
        .catch((error)=>{
            //console.log(error);
            alert("Not submitted");
        })
        .finally(()=>{
            clear();
        });
    }


    return(
        <Container maxWidth="md" sx={{marginTop:'150px',marginBottom: '150px'}}> 
            <Box 
                component="form" 
                noValidate 
                autoComplete="off"
                >
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <TextField
                            fullWidth
                            required
                            id="first-name"
                            label="First Name"
                            value={firstName}
                            helperText={firstNameError}
                            onBlur={onFirstNameChange}
                            onChange={onFirstNameChange}
                            />
                    </Grid>
                    <Grid item xs={12} md={6}>
                            <TextField
                            fullWidth
                            required
                            id="last-name"
                            label="Last Name"
                            value={lastName}
                            helperText={lastNameError}
                            onBlur={onLastNameChange}
                            onChange={onLastNameChange}
                            />
                    </Grid>
                    <Grid item xs={12}>
                            <TextField
                            fullWidth
                            required
                            type="email"
                            id="email"
                            label="Email"
                            value={email}
                            helperText={emailError}
                            onBlur={onEmailChange}
                            onChange={onEmailChange}
                            />
                    </Grid>
                    <Grid item xs={12} md={6}>
                            <TextField
                            fullWidth
                            select
                            required
                            defaultValue="IN"
                            id="outlined-select-country"
                            label="Select Country"
                            value={countryCode}
                            helperText={countryCodeError}
                            onBlur={onCountryCodeChange}
                            onChange={onCountryCodeChange}
                            >
                               {
                                countries.map((country)=>(
                                    <MenuItem key={country.code} value={country.code}>
                                        ({country.code}){country.dial_code}
                                    </MenuItem>
                                ))
                               }
                            </TextField>
                    </Grid>
                    <Grid item xs={12} md={6}>
                            <TextField
                            fullWidth
                            required
                            id="phone-number"
                            label="Phone Number"
                            value={phoneNumber}
                            helperText={phonenumberError}
                            onBlur={onPhoneNumberChange}
                            onChange={onPhoneNumberChange}
                            />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            required
                            id="message"
                            label="Message"
                            multiline
                            rows={4}
                            value={message}
                            helperText={messageError}
                            onBlur={onMessageChange}
                            onChange={onMessageChange}
                         />
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" size="large" onClick={onSubmit}>Submit</Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Contact