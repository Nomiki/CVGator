import React from 'react'
import Container from '@material-ui/core/Container'
import CV_TextBox from '../formBlocks/CV_TextBox'

const InfoPage = ({onChange  , resume } : any) => {
    return (
        <Container maxWidth="lg">
      <CV_TextBox
        name="fullName"
        display="Full Name"
        value={resume?.fullName}
        onChange={onChange}
      ></CV_TextBox>
      <CV_TextBox
        name="summary"
        display="Summary"
        value={resume?.summary}
        onChange={onChange}
      ></CV_TextBox>
      <CV_TextBox
        name="email"
        display="Email"
        value={resume?.email}
        onChange={onChange}
      ></CV_TextBox>
      <CV_TextBox
        name="phone"
        display="Phone"
        value={resume?.phone}
        onChange={onChange}
      ></CV_TextBox>
      <CV_TextBox
        name="address"
        display="Address"
        value={resume?.address}
        onChange={onChange}
      ></CV_TextBox>
    </Container>
    )
}

export default InfoPage;
