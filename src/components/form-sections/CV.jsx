import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
  Font,
} from "@react-pdf/renderer";

Font.registerEmojiSource({
  format: "png",
  url: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/",
});

const CV = ({ form }) => {
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
    text: {
      fontSize: "100",
      textAlign: "center",
    },
  });

  return (
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
          {form.interests.map((interest) => (
            <Text>
              - {interest.emoji} {interest.interest}
            </Text>
          ))}
          <View style={styles.line} />
        </View>
        <View style={styles.colRight}>
          <Text>
            {form.firstName} {form.lastName}
          </Text>
          <Text>{form.profession}</Text>
          <Text>
            <Image src={"https://img.icons8.com/ios-filled/50/marker.png"} />{" "}
            {form.city}, {form.country}
          </Text>
          <Text>{form.description}</Text>
          <View style={styles.contact}>
            <View style={styles.flex1}>
              <View style={styles.contactItem}>
                <Image
                  style={styles.icon}
                  src={"https://img.icons8.com/ios-filled/50/linkedin.png"}
                />
                <Text style={styles.inline}>{form.linkedIn} </Text>
              </View>
              <View style={styles.contactItem}>
                <Image
                  style={styles.icon}
                  src={"https://img.icons8.com/material-rounded/48/mail.png"}
                />
                <Text style={styles.inline}>{form.email}</Text>
              </View>
            </View>

            <View style={styles.flex1}>
              <View style={styles.contactItem}>
                <Image
                  style={styles.icon}
                  src={"https://img.icons8.com/ios-filled/50/phone.png"}
                />
                <Text> {form.phone}</Text>
              </View>
              <View style={styles.contactItem}>
                <Image
                  style={styles.icon}
                  src={"https://img.icons8.com/ios-filled/50/github.png"}
                />
                <Text> {form.portfolioURL}</Text>
              </View>
            </View>
          </View>
          <Text>Work Experience</Text>
          {form.workExperience.map((work) => (
            <>
              {" "}
              <Text>
                - {work.companyName} ({work.from} - {work.to})
              </Text>
              <Text>{work.title}</Text>
              <Text>Achievements/ Tasks</Text>
              <Text>{work.tasks}</Text>
            </>
          ))}

          <View style={styles.line} />
          <Text>Education</Text>
          {form.education.map((edu) => (
            <>
              <Text>
                - {edu.schoolName} ({edu.startingDate} - {edu.endDate})
              </Text>
              <Text>{edu.title}</Text>
            </>
          ))}
          <View style={styles.line} />
        </View>
      </Page>
    </Document>
  );
};

export default CV;
