export interface IResumeStruct{
    type: string,
    display: string,
    regex: string,
    innerDefinition? : object
}

export const ResumeMetadata : any  = {
    fullName : {
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

//serving proposal 
export const ResumeMetadataArr : IResumeStruct[] = [
    {
        type: "text",
        display: "Full Name",
        regex: ""
    },
    {
        type: "multiline",
        display: "Summary",
        regex: ""
    },
    {
        type: "complex",
        display: "Contact Information",
        regex: "",
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
]

export default ResumeMetadata;