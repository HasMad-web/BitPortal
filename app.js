const sections = [
  { title: 'Personal Information', icon: '▣', rows: [
    ['Application Number','2026374264'],['Student Name','HIMUJJAL SEAL'],['Date of Birth','23-Aug-2006'],['Gender','Male'],['Native Language','Assamese'],['Native State','Assam'],['Blood Group','O+'],['Physically Challenged','No'],['Community','General'],['Religion','Hindu'],['Caste',''],['Nationality','Indian'],['Hosteller','Hosteller'],['Aadhar Number','501085880334'],['Mobile Number','8011182131'],['@Current Address',''],['Street Name','Quarter No. 25, Pathsala SDCH,'],['Area Name','Pathsala Town.'],['City','Bajali'],['State','Assam'],['Country','India'],['Pincode','781325'],['Phone Number(Land Line)',''],['Email','himujjalseal246@gmail.com'],['@Permanent Address',''],['Street Name','C/O: Kamal Kumar Seal, Bijn Town Ward No. 4,'],['Area Name','Bjni, PO: Bjni, Dist: Chirang.'],['City','Chirang'],['State','Assam'],['Country','India'],['Pincode','783390'] ] },
  { title: 'Educational Information', icon: '🎓', rows: [
    ['Applied Degree','UG'],['Educational Qualification','12th/Intermediate'],['Branch / Group Studied','Physics, Chemistry, Biology, Physical Education, English Core, Hindi Core.'],['School Name','PM Shri Kendriya Vidyalaya Barpeta'],['Medium of Study','English'],['Board / University','Central Board of Secondary Education'],['Register No / Roll No','16615161'],['Class Obtained','First Class.'],['Year of Passing / Passed','2025'],['Month of Passing / Passed','May'],['@School / College Address',''],['Area Name','Krishna Nagar, Sundaridia.'],['City / District Name','Barpeta'],['State Name','Assam'],['Pincode / Zipcode','781301'],['Phone Number(Land Line)',''],['Break in Study','Yes'],['Reason','Preparing for competitive exam.'] ] },
  { title: 'Family Information', icon: '♣', rows: [
    ['Father Name','Kamal Kumar Seal'],['Father Occupation','Service'],['Father Mobile Number',''],['Mother Name','Mina Seal'],['Mother Occupation','Homemaker'],['Mother Mobile Number',''],['Annual Family Income',''],['Guardian Name','Kamal Kumar Seal'],['Guardian Contact',''] ] },
  { title: 'Proctor Information', icon: '◉', proctor: true, rows: [
    ['Faculty ID','100807'],['Faculty Name','K. Rangarajan'],['Faculty Designation','Assistant Professor Grade 2'],['School','School of Applied Science and Language'],['Cabin',''],['Faculty Department','SASL-Department'],['Faculty Email','rangarajan.k@vitbhopal.ac.in'],['Faculty Intercom',''],['Faculty Mobile Number','9677311134'] ] },
  { title: 'Hostel Information', icon: '⌂', rows: [
    ['Application Number','2026374264'],['Register Number','26BHI10127'],['Block Name','Mens Hostel Block 8A (Boys Hostel - Block)'],['Room No.','A312'],['Bed Type','3- Bed - NACPF'],['Mess Information','JAIN -M/S JMB CATERERS'] ] }
];

function table(rows, proctor) {
  const entries = rows.map(([key, value]) => key.startsWith('@')
    ? `<tr><td class="subheading" colspan="2">${key.slice(1)}</td></tr>`
    : `<tr><td>${key}</td><td>${value}</td></tr>`).join('');
  return `${proctor ? '<div class="proctor-image"><div class="silhouette"></div></div>' : ''}<table class="info-table"><tbody>${entries}</tbody></table>`;
}

const portal = document.querySelector('#portal');
portal.innerHTML = sections.map((section, index) => `<article class="panel"><button class="panel-header ${index === 4 ? 'active' : ''}" aria-expanded="${index === 4}"><span class="panel-icon">${section.icon}</span><span class="panel-title">${section.title}</span><span class="chevron">${index === 4 ? '⌃' : '⌄'}</span></button><div class="panel-content ${index === 4 ? 'open' : ''}">${table(section.rows, section.proctor)}</div></article>`).join('');

portal.addEventListener('click', event => {
  const button = event.target.closest('.panel-header');
  if (!button) return;
  const content = button.nextElementSibling;
  const open = content.classList.toggle('open');
  button.classList.toggle('active', open);
  button.setAttribute('aria-expanded', open);
  button.querySelector('.chevron').textContent = open ? '⌃' : '⌄';
});

let seconds = 19 * 60 + 29;
setInterval(() => { seconds = Math.max(0, seconds - 1); const minutes = Math.floor(seconds / 60); document.querySelector('#timer').textContent = `${minutes}m ${seconds % 60}s`; }, 1000);
