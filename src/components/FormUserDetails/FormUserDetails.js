import React, { Component } from 'react'
import {ThemeProvider as MuiThemeProvider} from "@material-ui/styles";
import  {AppBar, TextField, Button, Dialog, Toolbar, IconButton, Typography}  from "@material-ui/core";
import  MenuIcon  from "@material-ui/icons/Menu";


export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }
    render() {
        const { values, handleChange } = this.props

        return (
            <MuiThemeProvider>
                <>
                <Dialog
                    open
                    fullWidth
                    maxWidth='sm'
                >
                    <div>
                        <AppBar position="static">
                            <Toolbar variant="dense">
                                <IconButton edge="start" color="inherit" aria-label="menu">
                                    <MenuIcon />
                                </IconButton>
                                <Typography variant="h6" color="inherit">
                                    Enter User Details
                                </Typography>
                            </Toolbar>
                        </AppBar>
                    </div>      
                    <TextField
                        placeholder="Enter Your First Name"
                        label="First Name"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                        margin="normal"
                        fullWidth
                    />
                    <br />
                    <TextField
                        placeholder="Enter Your Last Name"
                        label="Last Name"
                        onChange={handleChange('lastName')}
                        defaultValue={values.lastName}
                        margin="normal"
                        fullWidth
                    />
                    <br />
                    <TextField
                        placeholder="Enter Your Email"
                        label="Email"
                        onChange={handleChange('email')}
                        defaultValue={values.email}
                        margin="normal"
                        fullWidth
                    />
                    <br />
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={this.continue}
                    >
                        Continue
                    </Button>
                </Dialog>
                </>
            </MuiThemeProvider>
        )
    }
}


export default FormUserDetails
