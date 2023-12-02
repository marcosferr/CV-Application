import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { pdf } from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";
import { PDFViewer } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    margin: "0px auto",
  },
  colLeft: {
    display: "flex",
    flex: 1,
    padding: 10,
    backgroundColor: "black",
    color: "white",
  },
  line: {
    height: 1,
    backgroundColor: "grey",
    width: "100%",
    margin: "10px 0px",
  },
  colRight: {
    flex: 3,
    padding: 10,
    backgroundColor: "white",
    color: "black",
  },
  icon: {
    width: "10px",
    height: "10px",
  },
  contact: {
    display: "flex",
    flexDirection: "row",
    margin: "20px 0px",
    fontSize: "10px",
  },
  contactItem: {
    display: "flex",
    flex: 1,
    margin: "10px 0x",
    flexShrink: 0,
    padding: "5px",
    flexDirection: "row",
    gap: "15px",
    alignItems: "center",
  },
  inline: {
    display: "flex",
    width: "100px",
  },
  flex1: {
    flex: 1,
    display: "flex",
  },
});
const form = {
  profilePicUrl: "https://i.imgur.com/9KYq7VG.jpg",
  firstName: "John",
  lastName: "Doe",
  profession: "Full Stack Developer",
  city: "Barcelona",
  country: "Spain",
  linkedIn: "https://www.linkedin.com/in/johndoe/",
  portfolioURL: "https://www.johndoe.com",
  email: "",
  skills: ["HTML", "CSS", "JavaScript", "React", "NodeJS", "MongoDB"],
  languages: [
    { language: "Spanish", level: "Native / Bilingual" },
    { language: "English", level: "Professional working proficiency" },
  ],
};
// inside your component
const handleDownload = async () => {
  const doc = <CV />;
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

const CVDownload = () => {
  return (
    <div className="flex column">
      <button onClick={handleDownload}>Download PDF</button>
      <PDFViewer>
        <CV />
      </PDFViewer>
    </div>
  );
};
// Create Document Component
const CV = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.colLeft}>
        <Image src="https://i.imgur.com/9KYq7VG.jpg" style={styles.img} />
        <Text>Skills</Text>
        {form.skills.map((skill) => (
          <Text>- {skill}</Text>
        ))}
        <View style={styles.line} />
        <Text>Languages</Text>
        {form.languages.map((language) => (
          <Text>
            - {language.language} ({language.level})
          </Text>
        ))}
        <View style={styles.line} />
        <Text>Interest</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.colRight}>
        <Text>Marcos Ferreira</Text>
        <Text>Web Developer</Text>
        <Text>
          <Image src={"https://img.icons8.com/ios-filled/50/marker.png"} />{" "}
          Barcelona, España
        </Text>
        <Text>
          I'm a passionate and driven web developer with experience in front-end
          development, back-end development, and database design. I'm always
          looking for new challenges and opportunities to grow my skills and
          expand my knowledge of the latest web technologies. In my free time,
          you can find me tinkering with new web projects, playing guitar, or
          exploring the beautiful San Francisco Bay Area.
        </Text>
        <View style={styles.contact}>
          <View style={styles.flex1}>
            <View style={styles.contactItem}>
              <Image
                style={styles.icon}
                src={"https://img.icons8.com/ios-filled/50/linkedin.png"}
              />
              <Text style={styles.inline}>linkedn.com/marcos </Text>
            </View>
            <View style={styles.contactItem}>
              <Image
                style={styles.icon}
                src={"https://img.icons8.com/material-rounded/48/mail.png"}
              />
              <Text style={styles.inline}>gmail.com</Text>
            </View>
          </View>

          <View style={styles.flex1}>
            <View style={styles.contactItem}>
              <Image
                style={styles.icon}
                src={"https://img.icons8.com/ios-filled/50/phone.png"}
              />
              <Text> gmail.com</Text>
            </View>
            <View style={styles.contactItem}>
              <Image
                style={styles.icon}
                src={"https://img.icons8.com/ios-filled/50/github.png"}
              />
              <Text> gmail.com</Text>
            </View>
          </View>
        </View>
        <Text>Work Experience</Text>
        <View style={styles.line} />
        <Text>Achievemenrts / Tasks</Text>
        <View style={styles.line} />
        <Text>Education</Text>
        <View style={styles.line} />
      </View>
    </Page>
  </Document>
);

export default CVDownload;
