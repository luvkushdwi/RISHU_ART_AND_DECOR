
import logo from "/Users/rbmbp19/Documents/RISHUDECOR/interior-design-portfolio/public/logo.png";
import Image from "next/image";
export default function Contact() {

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px",
        backgroundColor: "#f0f0f0",
        borderRadius: "8px",
     //   height: "50vh",
        maxWidth: "100%",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
    };

    const headingStyle = {
        fontSize: "2em",
        color: "#334455",
        marginBottom: "20px",
    };

    const textStyle = {
        fontSize: "2em",
        color: "#666",
    };

    const imageStyle = {
        width: "100px", // Set the desired width
        height: "100px", // Set the desired height
        borderRadius: "50%", // Make the image circular if needed
        marginBottom: "20px" // Space between image and heading
    };

    return (
        <div style={containerStyle}>

            <h1 style={headingStyle}>Contact Us</h1>
            <p style={textStyle}><strong>Phone</strong>: 9711804740</p>
            <p style={textStyle}><strong>Email</strong>: rishu.art.and.decor@gmail.com</p>
          {/* // <Image src={logo} alt="logo" className="w-102 h-100 p-40" /> */}

        </div>
    );
}
