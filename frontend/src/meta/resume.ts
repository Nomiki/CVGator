const ResumeMetadata = {
    fullName: {
        type: "text",
        display: "Full Name",
        regex: ""
    },
    summary: {
        type: "multiline",
        display: "Summary",
        regex: ""
    },
    contactInformation: {
        type: "complex",
        display: "Contact Information",
        innerDefinition: {
            email: {
                type: "text",
                display: "Email",
                regex: ""
            },
            phone: {
                type: "text",
                display: "Phone",
                regex: ""
            },
            address: {
                type: "text",
                display: "Address",
                regex: ""
            }
        }
    }
}

export default ResumeMetadata;