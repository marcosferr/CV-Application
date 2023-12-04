import React from "react";
import { pdf } from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import CV from "./CV";

const CVDownload = () => {
  const { form } = useContext(FormContext);
  // inside your component
  const handleDownload = async () => {
    const doc = <CV form={form} />;
    const asPdf = pdf([]); // pass an empty array to the pdf function
    asPdf.updateContainer(doc);
    const blob = await asPdf.toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "cv.pdf";
    link.click();

    // cleanup
    URL.revokeObjectURL(url);
  };
  return (
    <div className="flex column">
      <button onClick={handleDownload}>Download PDF</button>
      <CVPreview form={form} />
    </div>
  );
};

const CVPreview = ({ form }) => {
  const styles = {
    page: {
      display: "flex",
      flexDirection: "row",
      backgroundColor: "#E4E4E4",
      width: "100%",
      maxWidth: "900px",
      margin: "0px auto",
      padding: "20px",
    },
    colLeft: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: "black",
      color: "white",
      width: "30%",
      padding: "20px",
    },
    colRight: {
      display: "flex",
      flexDirection: "column",
      width: "70%",
      padding: "20px",
    },
    img: {
      width: 100,
      height: 100,
      borderRadius: "50%",
      margin: "0px auto",
    },
    header: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "20px",
    },
    section: {
      margin: "10px 0",
      padding: "10px",
      backgroundColor: "white",
    },
    sectionTitle: {
      fontWeight: "bold",
      fontSize: "20px",
      marginBottom: "10px",
    },
    item: {
      marginBottom: "10px",
    },
    itemTitle: {
      fontWeight: "bold",
    },
    itemDescription: {
      fontStyle: "italic",
    },
    contact: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      fontSize: "14px",
      marginBottom: "20px",
    },
  };

  return (
    <div size="A4" style={styles.page}>
      <div style={styles.colLeft}>
        <img src="https://i.imgur.com/9KYq7VG.jpg" style={styles.img} />
        <p>Skills</p>
        {form.skills.map((skill) => (
          <p>- {skill}</p>
        ))}
        <div style={styles.line} />
        <p>Languages</p>
        {form.languages.map((language) => (
          <p>
            - {language.language} ({language.level})
          </p>
        ))}
        <div style={styles.line} />
        <p>Interest</p>
        {form.interests.map((interest) => (
          <p>
            - {interest.emoji} {interest.interest}
          </p>
        ))}
        <div style={styles.line} />
      </div>
      <div style={styles.colRight}>
        <p>
          {form.firstName} {form.lastName}
        </p>
        <p>{form.profession}</p>
        <p>
          <img src={"https://img.icons8.com/ios-filled/50/marker.png"} />{" "}
          {form.city}, {form.country}
        </p>
        <p>{form.description}</p>
        <div style={styles.contact}>
          <div style={styles.flex1}>
            <div style={styles.contactItem}>
              <img
                style={styles.icon}
                src={"https://img.icons8.com/ios-filled/50/linkedin.png"}
              />
              <p style={styles.inline}>{form.linkedIn} </p>
            </div>
            <div style={styles.contactItem}>
              <img
                style={styles.icon}
                src={"https://img.icons8.com/material-rounded/48/mail.png"}
              />
              <p style={styles.inline}>{form.email}</p>
            </div>
          </div>

          <div style={styles.flex1}>
            <div style={styles.contactItem}>
              <img
                style={styles.icon}
                src={"https://img.icons8.com/ios-filled/50/phone.png"}
              />
              <p> {form.phone}</p>
            </div>
            <div style={styles.contactItem}>
              <img
                style={styles.icon}
                src={"https://img.icons8.com/ios-filled/50/github.png"}
              />
              <p> {form.portfolioURL}</p>
            </div>
          </div>
        </div>
        <p>Work Experience</p>
        {form.workExperience.map((work) => (
          <>
            {" "}
            <p>
              - {work.companyName} ({work.from} - {work.to})
            </p>
            <p>{work.title}</p>
            <p>Achievements/ Tasks</p>
            <p>{work.tasks}</p>
          </>
        ))}

        <div style={styles.line} />
        <p>Education</p>
        {form.education.map((edu) => (
          <>
            <p>
              - {edu.schoolName} ({edu.startingDate} - {edu.endDate})
            </p>
            <p>{edu.title}</p>
          </>
        ))}
        <div style={styles.line} />
      </div>
    </div>
  );
};

export default CVDownload;
