const personDetails = {
    personal: {
      firstName: "Subhan",
      lastName: "Khan",
      email: "subhan046643@gmail.com",
      age: 19,
      languages: " English & Urdu",
      phone: "0308-0455426",
      contactMail: "subhan046643@gmail.com",
      address: "Okara, Pakistan",
      nationality: "Pakistani",
      freelance: "Will be Available soon 😉",
      description: "A frontend developer specializes in creating the user interface of websites or web applications. They use HTML, CSS, and JavaScript to design and build visually appealing and interactive web pages. Their role involves translating design concepts into responsive and accessible layouts, ensuring a seamless user experience. Frontend developers work closely with designers and backend developers to bring web projects to life, and they stay updated on the latest web development trends and best practices to deliver modern, user-friendly websites."
    },
    professional: {
      yoe: 1,
      completedProjects: 2,
      happyCustomers: 0,
      awardsWon: 0,
    },
    academic: {
      college: {
        name: "Virtual University",
        duration: "2023-2027(expected)",
        course: "",
      },
      school: {
        name: "District Public School",
        duration: "2020-2022",
        course: "High School"
      }
    },
    skills: {
      // key: skill name
      // value: skill percentage
      "html": 95,
      "javascript": 50,
      "css": 100,
      "nodejs": 0,
      "wordpress": 0,
      "python": 0,
      "gitAndGithub": 50,
      "vscode": 90,
      },
    social: {
      github: "#",
      linkedin: "#",
      codepen: "#",
      telegram: "#"
    }
  };

  function setElemAttribute(elemId, elemValue, attr = 'innerText') {
    const elem = document.getElementById(elemId);

    // set value only if element is present
    if (elem) {
      console.log("setting attribute for" + elem, attr, elemValue);
      elem[attr] =  elemValue;
    }
  }

  function setSkillValue(skillName) {
    setElemAttribute('skill-' + skillName, personDetails.skills[skillName] + '%');
    const div = document.getElementsByClassName('skill-' + skillName)[0];
    if (div) {
      const className = 'p' + personDetails.skills[skillName];
      div.classList.remove('p0');
      div.classList.add(className);
    }
  }

  // index.html
  setElemAttribute('person-name', personDetails.personal.firstName + ' ' + personDetails.personal.lastName);
  setElemAttribute('person-desc', personDetails.personal.description);

  // about.html
  setElemAttribute('person-fname', personDetails.personal.firstName);
  setElemAttribute('person-lname', personDetails.personal.lastName);
  setElemAttribute('person-age', personDetails.personal.age);
  setElemAttribute('person-address', personDetails.personal.address);
  setElemAttribute('person-nationality', personDetails.personal.nationality);
  setElemAttribute('person-freelance', personDetails.personal.freelance);
  setElemAttribute('person-email', personDetails.personal.email);
  setElemAttribute('person-contactMail', personDetails.personal.contactMail);
  setElemAttribute('person-phone', personDetails.personal.phone);
  setElemAttribute('person-languages', personDetails.personal.languages);
  // professional
  setElemAttribute('person-yoe', personDetails.professional.yoe);
  setElemAttribute('person-completedProjects', personDetails.professional.completedProjects);
  setElemAttribute('person-happyCustomers', personDetails.professional.happyCustomers);
  setElemAttribute('person-awardsWon', personDetails.professional.awardsWon);
  // academic
  setElemAttribute('school-duration', personDetails.academic.school.duration);
  setElemAttribute('school-name', personDetails.academic.school.name);
  setElemAttribute('school-course', personDetails.academic.school.course);
  setElemAttribute('college-duration', personDetails.academic.college.duration);
  setElemAttribute('college-name', personDetails.academic.college.name);

  // TODO: can be replaced with a loop
  setSkillValue('html');
  setSkillValue('css');
  setSkillValue('javascript');
  setSkillValue('python');
  setSkillValue('nodejs');
  setSkillValue('wordpress');
  setSkillValue('gitAndGithub');
  setSkillValue('vscode');

  // contact.html
  setElemAttribute('github', personDetails.social.github, 'href');
  setElemAttribute('codepen', personDetails.social.codepen, 'href');
  setElemAttribute('telegram', personDetails.social.telegram, 'href');
  setElemAttribute('linkedin', personDetails.social.linkedin, 'href');
  setElemAttribute('mail-hyperlink', "mailto:"+personDetails.personal.contactMail, 'href');